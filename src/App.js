import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import ReducerCount from './Components/ReducerCount/ReducerCount';
import PatientManagement from './Components/PatientManagement/PatientManagement';
import ExploreRef from './Components/ExploreRef/ExploreRef';

function App() {
  
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
      <ExploreRef></ExploreRef>
     <Home></Home>
    </div>
  );
}

export default App;
