//rsc
import '../App.css';
import React from 'react';
import { useSelector } from 'react-redux';

const Top = (props) => {
  // app.js 에서 받은 number를 props 로 받아서 구조분할 할당이 좋다
  // store로 변경 props 도 사용안함
  //const { number } = props;

  const { number, username } = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h1>Top</h1>
      번호 : {number}
      이름 : {username}
    </div>
  );
};

export default Top;
