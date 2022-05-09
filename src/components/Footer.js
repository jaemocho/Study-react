// rsc

import React from 'react';
import styledComponents from 'styled-components';

//하나의 컴포넌트를 생성(재사용)
//styled-componets = js파일과 css파일이 합쳐져서 관리가 편하다
// 태그처럼 사용
const StyledFooterDiv = styledComponents.div`
  border: 1px soild black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>오시는길 : 서울 강남구 .....</li>
        <li>전화번호 : 0202000</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
