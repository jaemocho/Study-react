//rsc
import React from 'react';
import { Button } from 'react-bootstrap';
import styledComponents from 'styled-components';

const StyledDeleteButton = styledComponents.button`
color:${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//위의 StyledDeleteButton 을 상속
const StyledAddButton = styledComponents(StyledDeleteButton)`
color:${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
background-color:green;
`;

// 부모로 부터 받아온 어떤 데이터를 가지고 스타일링을 할 것이라면 ?
const Home = (props) => {
  //   const boards = props.boards;
  //   console.log(1, props);
  //   console.log(boards);

  // 구조분할 할당
  const { boards, setBoards, user } = props; //props 의 boards와 id, user는 알아서 들어간다.

  return (
    <div>
      <Button variant="primary">Primary</Button>{' '}
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
