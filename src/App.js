import StateMap from './components/StateMap';
import axios from 'axios';
import { useState } from 'react';
import DataTable from './components/DataTable';
import StateDropdownBtn from './components/StateDropdownBtn';

function App() {

  const [selectedState, setSelectedState] = useState("");
  const [currentStateShape, setStateShape] = useState('');

  const onStateSelectHandler = (e) => {
    console.log(e);
    setSelectedState(e);
  }

  const [data, setData] = useState({});
  
  axios.get("https://love2create.github.io/InteractiveStateMap/src/data/stateData.json").then(response=>{
    setData(response.data);
  });

  return (
    <main>
      <h1>Organic Valley Acres Map</h1>
      <DataTable stateMapData={data} />
      <StateDropdownBtn stateMapData={data} onStateSelectHandler={onStateSelectHandler} selectedState={selectedState} />
      <StateMap stateMapData={data} onStateSelectHandler={onStateSelectHandler} selectedState={selectedState}/>
    </main>
  );
}

export default App;
