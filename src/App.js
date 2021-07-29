import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

let a = 20; //변수
const b = 30; //상수

const mystyle = {
  color: 'red',
};
function App() {
  //리스트만 관리하면 된다.
  let list = [1, 2, 3];

  //let number = 1; //상태값이 아니라서 안됨
  const [number, setNumber] = useState(1); //React안에 hooks 라이브러리
  //변수명 number가 생성됨. 값을 변경하려면 setNumber를 사용해야함 useState의 1이 number로 들어감.
  //set + 앞글자대문자
  const add = () => {
    //number++;
    setNumber(number + 1); //++은 그 값을 변경하는 것이므로 안되서 +1로 새 값을 할당. 리엑트에 number값을 변경요청
    console.log('add ', number);
  };

  //JSX 문법
  //리턴시 하나의 태그(DOM)만 리턴할 수 있다.
  //변수 선언은 let,const 만 가능하다.
  //if사용이 불가능하다 단, 삼항연산자는 사용할 수 있다.
  //조건부 렌더링을 사용한다. (조건 && 값(true일때만))
  //null 대신 undifined 단, 이는 일종의 값임.
  //css 디자인하는 법
  //1. 내부에 적는 방법(비추, 단순할때만), 2. 외부파일에 적는 방법, 3. 라이브러리 사용(부트스트랩, component-styled)

  //다운로드를 받은 상황
  const [users, setUsers] = useState([]); //빈배열

  const [number2, setNumber2] = useState(5);
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '김길규' },
    { id: 3, name: '이순신' },
    { id: 4, name: '권두한' },
  ];
  const download = () => {
    setUsers([...sample, { id: number2, name: '고길동' }]);
    setNumber2(number2 + 1);
  };

  //랜더링시점 = 상태값 변경시
  return (
    <div>
      <div>
        <h1>숫자: {number}</h1>
        <button onClick={add}>더하기</button>
      </div>
      <Sub />
      <hr />
      <br />
      <br />
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
