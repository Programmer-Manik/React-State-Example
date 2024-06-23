
import { useState } from 'react';
import './App.css'
import CounterWithClassFunComponent from './components/CounterWithClassFunComponent'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='border border-purple-500 p-10 m-10'>
      <h1>Count = {count}</h1>
     <CounterWithClassFunComponent count={count} setCount={setCount}/>
    </div>
  )
}

export default App
