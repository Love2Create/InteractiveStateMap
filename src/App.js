import StateMap from './components/StateMap';
import axios from 'axios';
import { useState } from 'react';
import DataTable from './components/DataTable';
import StateDropdownBtn from './components/StateDropdownBtn';

function App() {

  const [data, setData] = useState({});
  
  axios.get("https://love2create.github.io/InteractiveStateMap/src/data/stateData.json").then(response=>{
    setData(response.data);
  });

  return (
    <div>
      <StateDropdownBtn stateMapData={data} />
      <StateMap stateMapData={data} />
      <DataTable stateMapData={data} />
    </div>
  );
}

export default App;
