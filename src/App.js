import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Coin />
    </div>
    </BrowserRouter>
  );
}

export default App;
