import React from 'react';
import styled from 'styled-components';

//괄호에 원하는 이름을 넣으면 해당 값의 이름으로 받는다.
//props는 모든걸 다 받아오고 boards만 받기위해선 props.boards

let StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//부모로부터 받아온 어떤 데이터를 가지고 스타일링을 동적으로 한다면
const Home = (props) => {
  //const boards = props.boards;
  //const id = props.id;
  //구조분할 할당으로 대체
  //아래의 방법으로 여러개를 만들어 각기사용가능. 일단 하나만 사용할 것 이므로 주석처리함.
  //const { boards, id } = props;
  const { boards, setBoards, user } = props;

  console.log(boards);
  return (
    <div>
      <h1>홈</h1>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title}, 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
