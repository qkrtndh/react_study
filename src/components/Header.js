import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성함. 재사용이 가능하다.
//styled-component는 js와 css가 하나의 파일로 묶여서 관리가 편하다.
const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <HeaderList backgroundColor="blue">
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </HeaderList>
  );
};

export default Header;
