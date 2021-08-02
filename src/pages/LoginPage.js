import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  //재사용위해서 props.history.go(-1)
  const { history } = props;
  return (
    <div>
      <button onClick={() => history.go(-1)}>돌아가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
