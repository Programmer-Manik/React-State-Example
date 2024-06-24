
// import { useState } from 'react';
import './App.css'
import TodoForm from './components/Todo/TodoForm'
import TodoProvider from './context/TodoProvider'
// import UserInfoWithUseReducer from './components/UserInfoWithUseReducer'
// import CounterWithClassFunComponent from './components/CounterWithClassFunComponent'
// import UserInfoWithUseState from './components/UserInfoWithUseState';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <TodoProvider>
      <div>
          <TodoForm />
      </div>
    </TodoProvider>



    // <div className='border border-purple-500 p-10 m-10'>
    //   <UserInfoWithUseReducer/>
    // </div>



    // <div className='border border-purple-500 p-10 m-10'>
    //    {/* <UserInfoWithUseState/> */}
    // </div>





     // <div className='border border-purple-500 p-10 m-10'>
    //   {/* <h1>Count = {count}</h1> */}
    //  {/* <CounterWithClassFunComponent count={count} setCount={setCount}/> */}
    // </div>





     // <div className='border border-purple-500 p-10 m-10'>
    //   {/* <UserInfoWithUseState/> */}
    // </div>



  )
}

export default App
