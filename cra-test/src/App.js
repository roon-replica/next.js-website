import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js'

function App() {
  return (
    <>
    {
      (()=> {
        console.log(`node env = ${process.env.NODE_ENV}`)
        console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`)
      })()
    }

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello world
        </a>

        <TodoList/>
      </header>
    </div>
    </>
    
  );
}

export default App;
