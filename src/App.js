import './App.css';
import UseDebounceComponent from './components/UseDebounceComponent';
import UseEventListenerComponent from './components/UseEventListenerComponent';
import UseObserverComponent from './components/UseObserverComponent';
import UsePreviousComponent from './components/UsePreviousComponent';
import UseStateWithHistoryComponent from './components/UseStateWithHistoryComponent';
import UseStorageComponent from './components/UseStorageComponent';
import UseTimeoutComponent from './components/UseTimeoutComponent';
import UseToggleComponent from './components/UseToggleComponent';
import UseUpdateComponent from './components/UseUpdateComponent';
import UseWindowSizeComponent from './components/UseWindowSizeComponent';

function App() {
  return (
    <div className="App">
      {/* <UseToggleComponent /> */}
      {/* <UseTimeoutComponent/> */}
      {/* <UseDebounceComponent/> */}
      {/* <UseUpdateComponent/> */}
      {/* -----------NO EXAMPLE OF useArray------------ */}
      {/* <UsePreviousComponent/> */}
      {/* <UseStateWithHistoryComponent/> */}
      {/* <UseStorageComponent/> */}
      {/* <UseEventListenerComponent/> */}
      {/* <UseObserverComponent/> */}
      <UseWindowSizeComponent/>
    </div>
  );
}

export default App;
