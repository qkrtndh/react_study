import { createRef, useRef, useState } from 'react';
import './App.css';

function App() {
  //useRef는 dom(태그)을 변경할 때 사용
  //스타일을 저장하는 객체, 동적으로 바꿀 때 사용한다,.
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '홍길동' },
    { id: 2, name: '고길동' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = 'red';
          myRefs[0].current.style.backgroundColor = 'green';
          myRefs[1].current.style.backgroundColor = 'blue';
        }}
      >
        버튼
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
