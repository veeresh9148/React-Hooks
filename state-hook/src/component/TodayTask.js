import React, {useState} from 'react'

function Todaytask() {

  const [count, setCount] = useState(0)
  function handleClick(){
    if(count==5)
    {
      alert('you reached 5')
    }else if(count>5){
      alert('counter more than five')
    }else return setCount(count + 1)
  }
  

  return (
    <div>
      {/* <button onClick={(e) => setCount(count + 1)}>Count {count}</button> */}
      <button onClick={handleClick}>Count {count}</button>
    </div>
  )
}

export default Todaytask

