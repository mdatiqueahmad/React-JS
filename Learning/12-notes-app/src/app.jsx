import React from 'react'
import { useState } from 'react'

const App = () => {

    const [title, settitle] = useState("")
    const [details, setdetails] = useState("")

      const [task, settask] = useState([])

  const submitHandler = (e)  =>{
      e.preventDefault()

    const CopyTask= [...task];
    CopyTask.push({
      title,details
    })

    settask(CopyTask)

      settitle('')
      setdetails('')
  }

  const deleteNote = (idx)=>{
      const CopyTask = [...task]

      CopyTask.splice(idx,1)
      settask(CopyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white  '>
        
      <form onSubmit={ (e) => {
        submitHandler(e)
      }}
       className='flex lg:w-1/2 p-10 flex-col items-start gap-4 '>
        
        <h1 className='text-4xl font bold'>Add Notes </h1>

        {/* Pehla input for Heading */}
          <input 
         type="text"
         
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
              settitle(e.target.value)
          }}    
          />
          {/* Detailed input */}
        <textarea 
         type="text"
          placeholder='Write details'
          className='px-5 w-full font-medium  h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
            value={details}
          onChange={(e)=>{
              setdetails(e.target.value)
          }}  
          />

          <button 
          className='bg-white active:scale-95 font-medium w-full text-black px-5 py-2 rounded '
          >Add Note</button>
       

          {/* <img className='h-52 ' src="https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png" alt="" /> */}
      </form>

        <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font bold'>Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
            {task.map(function(elem,idx) {
              return <div key={idx} className='flex
               justify-between flex-col itemstar
                h-52 w-40 rounded-2xl text-black py-9 px-4 pt-9 pb-4 bg-white bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                
               <div>
                 <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-3 leading-tight text-sxs font-semibold text-gray-600'>{elem.details}</p>
               </div>
               <button onClick={() => {
                deleteNote(idx)
               }} 
               className='w-full cursor-pointer active:scale-95 bg-red-600 text-white py-1 rounded-2xl font-bold'>Delete</button>
              </div>
            })}
             
            
          </div>
         
        </div>

    </div>
  )
}

export default App