import React from 'react'

const App = () => {

//       localStorage.setItem("age" ,'18')
//  const age= localStorage.getItem("age")
//  console.log(age)

//   localStorage.setItem("user" ,'atique')
//  const user= localStorage.getItem("user")
//  console.log(user)

//  localStorage.removeItem('age')
 
const users ={
  username:'atique',
  age:'21',
  city: 'dhanbad'
}
 
localStorage.setItem("users", JSON.stringify(users))

  console.log(JSON.parse(localStorage.getItem("users")))

  return (
    <div>App</div>
  )
}

export default App