import StateMap from './components/StateMap';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});
  
  axios.get("https://love2create.github.io/InteractiveStateMap/src/data/stateData.json").then(response=>{
    setData(response.data);
  });

  return (
    <div>
      <StateMap stateMapData={data} />
    </div>
  );
}

export default App;
