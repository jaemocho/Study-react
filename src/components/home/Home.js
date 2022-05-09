//rsc
import React from 'react';

const Home = (props) => {
  //   const boards = props.boards;
  //   console.log(1, props);
  //   console.log(boards);

  // 구조분할 할당
  const { boards, setBoards } = props; //props 의 boards와 id는 알아서 들어간다.

  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}|
        </h3>
      ))}
    </div>
  );
};

export default Home;
