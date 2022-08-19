import './App.css';
import UseDebounceComponent from './components/UseDebounceComponent';
import UseTimeoutComponent from './components/UseTimeoutComponent';
import UseToggleComponent from './components/UseToggleComponent';
import UseUpdateComponent from './components/UseUpdateComponent';

function App() {
  return (
    <div className="App">
      {/* <UseToggleComponent /> */}
      {/* <UseTimeoutComponent/> */}
      {/* <UseDebounceComponent/> */}
      <UseUpdateComponent/>
    </div>
  );
}

export default App;
