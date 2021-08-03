import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { decrease, increase } from '../store';
const Bottom = () => {
  const dipatcher = useDispatch();
  return (
    <div className="sub_container">
      <h1>Bottom</h1>
      <button onClick={() => dipatcher(increase('tndh'))}>증가</button>
      <button onClick={() => dipatcher(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
