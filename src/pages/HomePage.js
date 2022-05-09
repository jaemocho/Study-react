//rsc
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home.js';

// data down 은 page에서 하는게 좋다 component는 재사용이 가능할 수 있어서
const HomePage = () => {
  //http 요청(javascript의 fetch, axios(다운 필요))
  const [boards, setBoards] = useState([]);

  //depandency 빈 배열이면 한번만 실행
  useEffect(() => {
    //다운로드 가정 = 다운로드 중 blocking 이 된다. fetch(), axios(), ajax() 비동기 가능

    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...data]);
  }, []);

  return (
    <div>
      <Header />
      {/* Home.js 에 boards를 파라메터로 넣어줘야한다   const Home = (props) => { */}
      <Home boards={boards} setBoards={setBoards} />
      <Footer />
    </div>
  );
};

export default HomePage;
