import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'


const App = () => {
  const [count, setcount] = useState(0)
  return (
   <>
    <Header/>
     <Home/>
      <Footer/>
   </>
  )
}

export default App