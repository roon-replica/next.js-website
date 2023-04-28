import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [pageName, setPageNmae] = useState('');
  
  useEffect(() => {
    window.onpopstate = function (event) {
      console.log(event.state);
      setPageNmae(event.state);
    }
  }, []);

  function onClick(pageName) {
    window.history.pushState(pageName, '', '/' + pageName);
    setPageNmae(pageName);
  }

  return (
    <div>
      <button onClick={() => onClick('page1')}> page 1</button>
      <button onClick={() => onClick('page2')}> page 2</button>
      {!pageName && <Home />}
      {pageName === 'page1' && <Page1/>}
      {pageName === 'page2' && <Page2/>}
    </div>
  );
}

function Home(){
  return <h2> this is hoempage</h2>
}

function Page1(){
  return <h2>this is page 1</h2>
}

function Page2(){
  return <h2>this is page 2</h2>
}

export default App;
