import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";
import wrapText from "./wrapText"; 

const preprocessData = (svgRef, chart) => {
  const width = 1250;
  const height = 600;
  const fixedHeight = 120;
  const nodePadding = 40;
  const tabHeight = 100;
  const tabPaddingTop = 20;
  const fontSize = "12px";
  const nodeWidth = 200;

  const nodes = [];
  const links = [];
  const nodeMap = new Map();
  let index = 0;

  const addNode = (name) => {
    if (!nodeMap.has(name)) {
      nodeMap.set(name, index++);
      nodes.push({ name });
    }
    return nodeMap.get(name);
  };

  // === Step 1: level1.node1 → level2.node1 ===
  const from1 = chart.level1.node1;
  const to2 = chart.level2.node1;
  links.push({ source: addNode(from1), target: addNode(to2), value: 1 });

  // === Step 2: level2.node1 → all level3 nodes (+ optional level4) ===
  Object.entries(chart.level3).forEach(([key, node3]) => {
    if (key !== "tabLabel") {
      links.push({ source: addNode(to2), target: addNode(node3), value: 1 });

      const node4 = chart.level4?.[key];
      if (node4) {
        links.push({ source: addNode(node3), target: addNode(node4), value: 1 });
      }
    }
  });

  const { nodes: layoutNodes, links: layoutLinks } = sankey()
    .nodeWidth(nodeWidth)
    .nodePadding(160)
    .extent([[1, 1], [width, height]])({
      nodes: nodes.map((d) => ({ ...d })),
      links: links.map((d) => ({ ...d })),
    });

  // === Compute max column height across all columns ===
    const columns = d3.groups(layoutNodes, d => d.x0);
    const maxColHeight = d3.max(columns, ([, colNodes]) =>
    colNodes.length * fixedHeight + (colNodes.length - 1) * nodePadding
    );

    // === Center all columns relative to the same max height ===
    columns.forEach(([, colNodes]) => {
    const totalHeight = colNodes.length * fixedHeight + (colNodes.length - 1) * nodePadding;
    let yStart = (height - maxColHeight) / 2 + (maxColHeight - totalHeight) / 2;

    colNodes.forEach(node => {
        node.y0 = yStart;
        node.y1 = yStart + fixedHeight;
        yStart += fixedHeight + nodePadding;
    });
  });

  // === Center whole chart ===
  const minX = d3.min(layoutNodes, d => d.x0);
  const maxX = d3.max(layoutNodes, d => d.x1);
  const chartWidth = maxX - minX;

  const minY = d3.min(layoutNodes, d => d.y0);
  const maxY = d3.max(layoutNodes, d => d.y1);
  const chartHeight = maxY - minY;

  const offsetX = (width - chartWidth) / 10 - minX;
  const offsetY = height - chartHeight + 200;

  layoutNodes.forEach((node) => {
    const mid = (node.y0 + node.y1) / 2;
    node.y0 = mid - fixedHeight / 2;
    node.y1 = mid + fixedHeight / 2;
  });

  layoutLinks.forEach(link => {
    link.y0 = link.source.y0 + (link.source.y1 - link.source.y0) / 2;
    link.y1 = link.target.y0 + (link.target.y1 - link.target.y0) / 2;
  });

  // === Draw chart ===
  const svg = d3.select(svgRef.current);
  svg.selectAll("*").remove(); // Clear previous content

  const chartGroup = svg.append("g")
    .attr("transform", `translate(${offsetX}, ${offsetY})`);

  // Tab Labels
  const nodeColumns = d3.groups(layoutNodes, d => d.x0);
  const tabLabels = [
    chart.level1.tabLabel,
    chart.level2.tabLabel,
    chart.level3.tabLabel,
    chart.level4?.tabLabel || ""
  ];

  const tabData = nodeColumns.map((col, i) => {
    const colNodes = col[1];
    const x0 = d3.min(colNodes, d => d.x0);
    const x1 = d3.max(colNodes, d => d.x1);
    const x = (x0 + x1) / 2 + offsetX;
    return { x, label: tabLabels[i] || "" };
  });

  svg.append("g")
    .selectAll("g")
    .data(tabData)
    .join("g")
    .attr("transform", d => `translate(${d.x - nodeWidth / 2}, ${tabPaddingTop})`)
    .each(function (d) {
      d3.select(this)
        .append("rect")
        .attr("width", nodeWidth)
        .attr("height", tabHeight)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "#e92695");

      d3.select(this)
        .append("text")
        .attr("x", nodeWidth / 2)
        .attr("y", tabHeight / 2 )
        .attr("text-anchor", "middle")
        .attr("font-size", fontSize)
        .attr("font-family", "Roboto, Arial, sans-serif")
        .attr("font-weight", "bold")
        .attr("fill", "#fff")
        .text(d.label);
    });

  // Draw Links
  chartGroup.append("g")
    .attr("fill", "none")
    .attr("stroke-opacity", 0.3)
    .selectAll("path")
    .data(layoutLinks)
    .join("path")
    .attr("d", sankeyLinkHorizontal())
    .attr("stroke", "#5188cf")
    .attr("stroke-width", d => Math.max(25, d.width));

  // Draw Nodes
  chartGroup.append("g")
    .selectAll("rect")
    .data(layoutNodes)
    .join("rect")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("height", d => d.y1 - d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("fill", "#e92695")
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("stroke", "none")

  // Node Labels
  chartGroup.append("g")
    .selectAll("text")
    .data(layoutNodes)
    .join("text")
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "#fff")
    .attr("font-family", "sans-serif")
    .each(function (d) {
      const lines = wrapText(d.name, 180, svg);
      const nodeHeight = d.y1 - d.y0;
      const lineHeight = 14;
      const yStart = d.y0 + (nodeHeight - lines.length * lineHeight) / 2 + 10;
      d3.select(this)
        .selectAll("tspan")
        .data(lines)
        .join("tspan")
        .attr("x", (d.x0 + d.x1) / 2)
        .attr("y", (t, i) => yStart + i * lineHeight)
        .text(line => line);
    });
};

export default preprocessData;
