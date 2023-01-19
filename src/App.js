import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Superman"/>
      <Welcome name="Bruce" heroName="Superman"/> */}
      <FunctionClick/>
      
    </div>
  )
}

export default App;
