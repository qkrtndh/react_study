import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Home from '../components/Home/Home';
import Header from '../components/Header';

//http 요청하는 방법
//1. jquery의 ajax - 여기서는 사용 불가
//2. fetch = 자바스크립트의 순수 기능
//3. axios 다운받아야한다.

const HomePage = () => {
  //서버가 없음으로 임의사용
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  //빈배열로 하여 최초 1회 실행
  useEffect(() => {
    //다운로드 가정
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);
  //이렇게 넘어가는걸 props 라고한다
  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
//맨처음 useEffect가 실행될 때 data는 다운로드되는 중이기 때문에 비어있다.
//그런데 비동기방식이므로 비어있는 데이터가 설정되어 넘어간다
//다운로드가 모두 끝나면 다시 그려져야 하므로 반드시 다운로드되는 데이터는 상태값이어야 한다.
