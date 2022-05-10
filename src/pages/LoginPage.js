import React from 'react';
import Login from '../components/Login';
import { Title } from '../MyCss';

const LoginPage = (props) => {
  //구조분할 할당
  const { history } = props;

  //match param 으로 데이터를 받을 수 있다.
  console.log('LoginPage', props);
  console.log(props.match.params.id);

  return (
    <div>
      <button onClick={() => history.goBack()}> 뒤로가기 </button>
      {/* <button onClick={() => props.history.go(-1)}> 뒤로가기 </button> */}
      {/* <button onClick={() => props.history.push("/")}> 뒤로가기 </button> */}
      <Login />
      {/* <div className="box-style">안녕</div> */}
      <Title>안녕</Title>
    </div>
  );
};

export default LoginPage;
