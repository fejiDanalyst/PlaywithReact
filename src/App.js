import logo from './logo.svg';
import './App.css';
import Circle from './Circle.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        

      
      <img src={Circle} className="App-Circle" alt="Circle" />
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Welcome To My React App Page!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
