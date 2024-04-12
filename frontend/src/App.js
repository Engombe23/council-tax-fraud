import { Outlet } from 'react-router-dom';
import './App.css';
import NavigationUI from './components/NavigationUI';

function App() {
  return (
    <div className="App">
      <NavigationUI/>
      <Outlet/>
    </div>
  );
}

export default App;