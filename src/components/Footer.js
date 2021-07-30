import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성함. 재사용이 가능하다.
//styled-component는 js와 css가 하나의 파일로 묶여서 관리가 편하다.
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는길: alrlalrkajfls</li>
        <li>전화번호: 9548948</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
