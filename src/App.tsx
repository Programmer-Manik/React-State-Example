
// import { useState } from 'react';
import './App.css'
import UserInfoWithUseReducer from './components/UserInfoWithUseReducer'
// import CounterWithClassFunComponent from './components/CounterWithClassFunComponent'
// import UserInfoWithUseState from './components/UserInfoWithUseState';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className='border border-purple-500 p-10 m-10'>
      <UserInfoWithUseReducer/>
      {/* <UserInfoWithUseState/> */}
      {/* <h1>Count = {count}</h1> */}
     {/* <CounterWithClassFunComponent count={count} setCount={setCount}/> */}
    </div>
  )
}

export default App
