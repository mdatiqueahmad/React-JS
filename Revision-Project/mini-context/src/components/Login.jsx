import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
   
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser}= useContext(UserContext)

   const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
       
      <input type="text" onChange={(e) => {
        setusername(e.target.value)
      }} value={username} placeholder='username' />

          {"    "}

         <input type="text" onChange={(e) => {
          setpassword(e.target.value)
         }} value={password} placeholder='password' />

         <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login