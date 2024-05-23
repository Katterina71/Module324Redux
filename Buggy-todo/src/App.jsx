import './App.css';  
// wrong path
import FirstLevel from './level1/Main'
import SecondLevel from "./level2/Main"
function App() {

  return (
    <div className="App">
        <FirstLevel/>
        <SecondLevel/>
    </div>
  );
}

export default App;
