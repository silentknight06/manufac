import React, { useState, useEffect } from 'react';
import cropData from '../Utills/data';


const CropDataComponent = () => {
  const [averagedData, setAveragedData] = useState([]);

  useEffect(() => {
    const aggregatedData = aggregateData(cropData);

    // Set state with aggregated data
    setAveragedData(aggregatedData);
  }, []);

  const aggregateData = (data) => {
    const aggregated = {};
    data.forEach(entry => {
      const cropName = entry["Crop Name"];
      if (!aggregated[cropName]) {
        aggregated[cropName] = {
          totalYield: 0,
          totalArea: 0,
          count: 0
        };
      }
      if (entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) {
        aggregated[cropName].totalYield += entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
        aggregated[cropName].totalArea += entry["Area Under Cultivation (UOM:Ha(Hectares))"];
        aggregated[cropName].count++;
      }
    });

    // Calculate averages
    const averagedData = Object.keys(aggregated).map(cropName => ({
      cropName,
      averageYield: (aggregated[cropName].totalYield / aggregated[cropName].count).toFixed(3),
      averageArea: (aggregated[cropName].totalArea / aggregated[cropName].count).toFixed(3)
    }));

    return averagedData;
  };

  return (
    <div>
      <h1>Crop Data Averages</h1>
      <table border='5' >
        <thead>
          <tr>
            <th>Crop Name</th>
            <th>Average Yield (Kg/Ha)</th>
            <th>Average Cultivation Area (Ha)</th>
          </tr>
        </thead>
        <tbody>
          {averagedData.map((crop, index) => (
            <tr key={index}>
              <td>{crop.cropName}</td>
              <td>{crop.averageYield}</td>
              <td>{crop.averageArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropDataComponent;
