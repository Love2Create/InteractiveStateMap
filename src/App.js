import StateMap from './components/StateMap';
import axios from 'axios';
import { useState } from 'react';
import DataTable from './components/DataTable';
import StateDropdownBtn from './components/StateDropdownBtn';

function App() {

  const [selectedState, setSelectedState] = useState("");

  const onStateSelectHandler = (e) => {
    console.log(e);
    setSelectedState(e);
  }

  const [data, setData] = useState({});
  
  axios.get("https://love2create.github.io/InteractiveStateMap/src/data/stateData.json").then(response=>{
    setData(response.data);
  });

  return (
    <div>
      <StateDropdownBtn stateMapData={data} onStateSelectHandler={onStateSelectHandler} selectedState={selectedState} />
      <StateMap stateMapData={data} onStateSelectHandler={onStateSelectHandler} selectedState={selectedState}/>
      <DataTable stateMapData={data} />
    </div>
  );
}

export default App;
