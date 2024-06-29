
// import cropData from '../Utills/Data';

const aggregateData = (data) => {
  const yearMap = {};

  data.forEach((item) => {
    const year = item.Year;
    const production = parseFloat(item["Crop Production (UOM:t(Tonnes))"]) || 0;

    if (!yearMap[year]) {
      yearMap[year] = {
        maxCrop: item["Crop Name"],
        maxProduction: production,
        minCrop: item["Crop Name"],
        minProduction: production
      };
    } else {
      if (production > yearMap[year].maxProduction) {
        yearMap[year].maxCrop = item["Crop Name"];
        yearMap[year].maxProduction = production;
      }
      if (production < yearMap[year].minProduction && production > 0) {
        yearMap[year].minCrop = item["Crop Name"];
        yearMap[year].minProduction = production;
      }
    }
  });

  return Object.entries(yearMap).map(([year, { maxCrop, minCrop }]) => ({
    year,
    maxCrop,
    minCrop
  }));
};

export default aggregateData;
