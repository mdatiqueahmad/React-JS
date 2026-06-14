import React from 'react'

const App = () => {
  
    let submitHandler = (e)=>{
     e.preventDefault()
      console.log("atuikj form submitted")
    }

  return (
  <div>
      
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App