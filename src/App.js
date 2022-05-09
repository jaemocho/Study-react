import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

//https://styled-components.com/

// useRef(디자인)
// dom을 변경할 때 사용

// styledComponents.h1` 는 var t = document.createElement("h1"); 과 같다.
// styledComponents를 MyCss 에 파일로 빼서 사용 가능

const a = {
  backgroundColor: 'red',
};

function App() {
  return (
    <div>
      {/* <LoginPage /> */}
      <HomePage />
    </div>
  );
}

export default App;
