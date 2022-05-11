//글쓰기, 글삭제, 글목록보기

import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';
import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1 className="container">최상단화면</h1>
      <Top number={number} />
      <Bottom addNumber={addNumber} />
    </div>
  );
}

export default App;
