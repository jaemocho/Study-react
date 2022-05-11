//rsc
import React, { useState } from 'react';
import styledComponents from 'styled-components';

const StyledItemBoxDiv = styledComponents.div`
display:flex;
justify-content: space-between;
border: 3px soild black;
padding : 10px;
height:100px;
align-item: center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
    { id: 6, title: '제목6', content: '내용6' },
  ]);

  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });

  const handleWrite = () => {
    // ListPage의 setPosts에 데이터를 담아야한다
    setPosts([...posts, post]);
    setNo(no + 1);
  };

  // 여러개를 만들어야하니까 아래처럼 합치는쪽으로
  // const handleChangeTitle = (e) => {
  //   console.log(e.target.value);
  //   setPost({ title: e.target.value });
  // };

  // const handleChangeContent = (e) => {
  //   setPost({ content: e.target.value });
  // };

  //input text에 post라는 useState를 매핑, 변화를 감지해 변경 내용을 화면에 display
  //  onChange={handleChangeTitle}
  //  setPost({ title: e.target.value });
  const handleForm = (e) => {
    //변수를 동적으로 만들어준다. [e.target.name] java에 없는 기능 Computed property names in React to set state

    // ...post로 기존값 유지하면서 변경해야한다
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post.title + '' + post.content);
  };

  //form tag 쓸대는 value에 상태값을 넣는다
  // onChang 될 때마다 상태 값 반영
  //  Computed property names in React to set state 를 사용해서 input 여러개를 함수 하나로 컨트롤 가능
  // 기존값 유지 생각 [...post,추가데이터]
  return (
    <div>
      <h1>리스트 페이지</h1>

      <div>
        <hr />
        <input
          type="text"
          placeholder="제목을 입력하세요..."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <hr />
        <input
          type="text"
          placeholder="내용을 입력하세요..."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button onClick={handleWrite}>글쓰기</button>
      </div>

      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          id: {post.id} 제목 : {post.title} 내용 : {post.content}
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
