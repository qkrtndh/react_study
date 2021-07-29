import logo from './logo.svg';
import './App.css';
let a = 20; //변수
const b = 30; //상수

const mystyle = {
  color: 'red',
};
function App() {
  //리스트만 관리하면 된다.
  let list = [1, 2, 3];

  //JSX 문법
  //리턴시 하나의 태그(DOM)만 리턴할 수 있다.
  //변수 선언은 let,const 만 가능하다.
  //if사용이 불가능하다 단, 삼항연산자는 사용할 수 있다.
  //조건부 렌더링을 사용한다. (조건 && 값(true일때만))
  //null 대신 undifined 단, 이는 일종의 값임.
  //css 디자인하는 법
  //1. 내부에 적는 방법(비추, 단순할때만), 2. 외부파일에 적는 방법, 3. 라이브러리 사용(부트스트랩, component-styled)
  return (
    <div>
      <div style={mystyle}>안녕1 {a === 10 ? '맞다' : '아니다'}</div>
      <hr />
      <h1 className="box-style">header {b === 30 && '20이다.'}</h1>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
