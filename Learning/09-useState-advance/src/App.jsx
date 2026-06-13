// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState({user:'atique ' , age:21})

//   const btnClicked =() =>{
//     const newNum = {...num};
//     newNum.user="Ahmad"
//     newNum.age=20
//     setnum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App 
// // 2nd example
// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState([10,20,30])

//   const btnClicked =() =>{
//     const newNum = {...num};
//     newNum.push(99)
//     setnum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  // const [num, setnum] = useState([10,20,30])
  const [num, setnum] = useState(1)

  const btnClicked =() =>{
  //  setnum(prev=>({...prev,age:50}))
  setnum(prev=>(prev+1))
  setnum(prev=>(prev+1))
  setnum(prev=>(prev+1))
  }
  return (
    <div>
      {/* <h1>{num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App

