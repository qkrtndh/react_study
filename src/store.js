//액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

//상태
const inistate = {
  number: 0,
  username: '',
};

//액션의 결과를 걸러내는 역할
const reducer = (state = inistate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload }; //리턴되면 호출한 쪽에서 받는 것이 아닌 ui가 변경됨.
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
