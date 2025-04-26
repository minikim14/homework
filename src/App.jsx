import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">소형의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="소형"
        description="ㅋㅋ개발자입니다."
      />

      <div className="4coffee">
        <a
          className="4coffee"
          href="https://github.com/minikim14/4coffee"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 CHAPTER 3 - 기초
        </a>
        
      </div>
    </div>
  );
}

export default App;
