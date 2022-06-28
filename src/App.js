import StateMap from './components/StateMap';
import { useState } from 'react';
import DataTable from './components/DataTable';
import StateDropdownBtn from './components/StateDropdownBtn';

import stateData from '../src/stateData.js';

function App() {
  const [selectedState, setSelectedState] = useState("");

  const onStateSelectHandler = (e) => {
    setSelectedState(e);
  }

  return (
    <main>
      <h1>Organic Valley Acres Map</h1>
      <DataTable stateMapData={stateData} />
      <StateDropdownBtn stateMapData={stateData} onStateSelectHandler={onStateSelectHandler} selectedState={selectedState} />
      <StateMap stateMapData={stateData} onStateSelectHandler={onStateSelectHandler} selectedState={selectedState}/>
    </main>
  );
}

export default App;
