import React, { useEffect, useRef, useState } from "react";
import preprocessData from "./utils/preprocessData";
import { useTranslation } from 'react-i18next';

const SankeyChart = () => {
  const chartRefs = [useRef(), useRef(), useRef()];
  const { t, i18n } = useTranslation();
  const [chartData, setChartData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Load correct chart data file based on current language
  useEffect(() => {
    const loadChartData = async () => {
      try {
        const lang = i18n.language || 'en';
        const data = await import(`../locales/sankey/${lang}.json`);
        setChartData(data.default); // because it's an ES module
      } catch (err) {
        console.error("Failed to load chart data:", err);
      }
    };
    loadChartData();
  }, [i18n.language]);

  // Run Sankey layout whenever data is loaded or language changes
  useEffect(() => {
    if (chartData) {
      preprocessData(chartRefs[0], chartData.chart1);
      preprocessData(chartRefs[1], chartData.chart2);
      preprocessData(chartRefs[2], chartData.chart3);
    }
  }, [chartData]);

  const chartTitles = [
    t('howGestore.sankeyCharts.chart1'),
    t('howGestore.sankeyCharts.chart2'),
    t('howGestore.sankeyCharts.chart3'),
  ];

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col mb-6">
        <h3 className="mb-4 text-3xl text-gray-600 font-semibold">
          {t('howGestore.heading')}
        </h3>
        <h6 className="text-base text-gray-500">{t('howGestore.subtext')}</h6>
      </div>

      <div className="relative w-full h-[800px]">
        {chartRefs.map((ref, index) => (
          <svg
            key={index}
            ref={ref}
            width="1300"
            height="800"
            className={`absolute top-0 left-0 transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      <div className="text-center text-gray-600 text-2xl mt-6">
        <h3>{chartTitles[activeIndex]}</h3>
      </div>

      <div className="flex justify-center gap-3 mt-5">
        {chartRefs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-pink-600" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SankeyChart;
