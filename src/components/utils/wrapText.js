import * as d3 from "d3";

export default function wrapText(text, maxWidth = 180, context = null) {
  if (!text || typeof text !== "string") return [""];

  const chars = [...text]; // handles all languages, even emoji
  const lines = [];
  let currentLine = "";

  const svg = context || d3.select('body').append('svg').attr('class', 'temp-wrap-svg');
  const tempText = svg.append('text')
    .attr('font-size', 14)
    .attr('font-family', 'sans-serif')
    .style('visibility', 'hidden');

  for (const char of chars) {
    const nextLine = currentLine + char;
    tempText.text(nextLine);
    const width = tempText.node().getComputedTextLength();

    if (width < maxWidth) {
      currentLine = nextLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = char;
    }
  }

  if (currentLine) lines.push(currentLine);
  if (!context) svg.remove();

  return lines;
}
