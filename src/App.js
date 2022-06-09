import StateMap from './components/StateMap';

function App() {

  const data = require('./data/stateData.json');
  console.log(data);

  return (
    <div>
      <StateMap stateMapData={data} />
    </div>
  );
}

export default App;
