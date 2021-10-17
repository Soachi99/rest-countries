import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './components/topbar';
import General from './components/generalContainer';

function App() {
  return (
    <div className="App">
      <Top />
      <General />      
    </div>
    
  );
}

export default App;
