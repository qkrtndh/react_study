import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);
  const download = () => {
    //  다운로드 받고(통신을 통해)
    let downloadData = 5; //가정
    setData(downloadData);
  };
  //실행시점 1. app함수가 최초 실행시(마운트 될 때)->그림이 그려질때
  //2. 상태변수가 변경될 때
  //의존관계 리스트를 관리할 수 있다.
  useEffect(() => {
    console.log('UseEffect 실행됨');
    download();
  }, [search]); //두번째 list 목록은 의존하는 객체들로 해당 객체 변경시 동작한다. 빈 배열인 경우 최초실행시에만 동작하도록 할 수 있다.
  return (
    <div>
      <button
        onClick={() => {
          setSearch(search + 1);
        }}
      >
        검색
      </button>
      <h1> 데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
