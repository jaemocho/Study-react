// rsc

import React from 'react';
import styledComponents from 'styled-components';

//하나의 컴포넌트를 생성(재사용)
//styled-componets = js파일과 css파일이 합쳐져서 관리가 편하다
// 태그처럼 사용
const StyledHeaderDiv = styledComponents.div`
  border: 1px soild black;
  height: 300px;
`;

const Header = () => {
  return (
    <StyledHeaderDiv>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
