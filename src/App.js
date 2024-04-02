import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addUser,setValue } from './store/slices/counterSlices';

const App = ()=> {
const users = useSelector((state) => {console.log(state.counter.users);return state.counter.users});
const value = useSelector((state) => {console.log(state.counter.value);return state.counter.value});
const dispatch = useDispatch();

  const getUsers =()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
                .then(json => dispatch(addUser(json)))
  }

  return (
    <div>
       <div>{users?.map((item)=>item?.name)}</div>
       <div>{value}</div>
       <button onClick={()=>getUsers()}>Получить юзеров</button>
       <button onClick={()=>dispatch(setValue(10))}>Установить значание</button>
    </div>
  );
}

export default App;
