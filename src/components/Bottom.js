//rsc
import '../App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../store';

const Bottom = (props) => {
  //함수 자체를 받아서 온 것
  // store로 변경 props 도 사용안함
  //const { addNumber } = props;

  const dispatcher = useDispatch();

  return (
    <div className="sub_container">
      <h1>bottom</h1>
      <button onClick={() => dispatcher(increase('cos'))}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
