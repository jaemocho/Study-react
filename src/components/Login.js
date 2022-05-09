import React from 'react';
import styledComponents from 'styled-components';

const StyledLoginDiv = styledComponents.div`
    padding:30px 0 30px 0;
`;

const Login = () => {
  return (
    <StyledLoginDiv>
      <h1>로그인페이지입니다.</h1>
    </StyledLoginDiv>
  );
};

export default Login;
