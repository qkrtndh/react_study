import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum :', sum);
    return sum;
  };

  //연산 후 동일값이 사용될경우 재사용할 때 사용.
  //처음인자는 어떤 함수에 메모할지 지정
  //2번째 인자는 언제 실행할지 (dependency list)
  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        값추가
      </button>

      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자변경
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;
