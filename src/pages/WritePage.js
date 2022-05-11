//rsc
import React from 'react';

const WritePage = () => {
  const handleWrite = () => {
    // ListPage의 setPosts에 데이터를 담아야한다
    let post = { id: 6, title: '인풋값' };
  };

  return (
    <div>
      <h1>글쓰기페이지</h1>
      <hr />
      <input type="text" placeholder="제목을 입력하세요..." />
      <buttion type="button" onclick={handleWrite}>
        글쓰기
      </buttion>
    </div>
  );
};

export default WritePage;
