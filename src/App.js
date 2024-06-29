import './App.css';
// import Showdata from './Components/AggregatedTable';

import { MantineProvider } from '@mantine/core';
import AggregatedTable from './Components/AggregatedTable';
import CropDataComponent from './Components/CropDataComponent';
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <div style={{ padding: '20px' }}>
      <h1>Aggregated Crop Data</h1>
      <AggregatedTable />
      <CropDataComponent/>
    </div>
  </MantineProvider>
  );
}

export default App;
