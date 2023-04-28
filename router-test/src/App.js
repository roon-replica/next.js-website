import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Rooms from './Rooms';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: '5px solid gray' }}>
        <Link to="/">home</Link> <br />
        <Link to="/photo">사진</Link> <br />
        <Link to="/rooms">방 소개</Link> <br />

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/photo" Component={Photo} />
          <Route exact path="/rooms" element={(()=>Rooms('blue'))()} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2> this is homepage</h2>
}

function Photo() {
  return <h2>this is photo page</h2>
}

export default App;
