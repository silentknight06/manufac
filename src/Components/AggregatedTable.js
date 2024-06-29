
import React from 'react';
import { Table } from '@mantine/core';
import aggregateData from './aggregateData';

import cropData from  '../Utills/data'

const AggregatedTable = () => {
  const aggregatedData = aggregateData(cropData);

  const rows = aggregatedData.map((entry, index) => (
    <tr key={index}>
      <td>{entry.year}</td>
      <td>{entry.maxCrop}</td>
      <td>{entry.minCrop}</td>
    </tr>
  ));

  return (
    <Table border='5'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default AggregatedTable;
