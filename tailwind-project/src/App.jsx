import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* navbar goes here */}

      <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4  '>
        <div className='text-2xl  text-indigo-700 font-bold'>Pw Skills</div>
        <ul className='md:flex hidden font-semibold'>
          <li className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About Us</li>
          <li className='mx-[10px] cursor-pointer'>Contact Us</li>
        </ul>

        <div className='hidden md:block px-2 py-2 bg-indigo-700  text-white rounded font-bold cursor-pointer'>Login/Signup</div>
 
        <div className='md:hidden'> 
          <a className='text-4xl' href="#">&#8801;</a>
        </div>
      </nav>
{/* 
navbarends here */}

{/* image section starts here */}
<header className="w-full h-auto" >
   <img className='w-full hidden md:block' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" />
   <img className='w-full md:hidden' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" />
</header>
{/* image section here */}
    
    {/* our students section */}
    <div className="h-auto w-full flex flex-wrap flex-col  text-center p-10">
      <div className='w-full h-auto flex flex-wrap flex-col items-center'>
        <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center'>"Pure Hardwork, No Shortcuts!"</p>

        <div className='w-36 h-1 border-b-4 border-yellow-400 m-2 rounded-2xl md:mt-4 mb-12  '></div>
      

      <div className='w-full flex flex-wrap justify-evenly '>
        <div className='w-46 flex flex-col items-center mb-12 '> 
              <img className='w-44  rounded-4xl h-44' src="https://images.pexels.com/photos/31679271/pexels-photo-31679271.jpeg" alt="" />
              <p className='text-3xl font-bold text-white'> 600+</p>
              <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
           </div>

           <div className='w-46 flex flex-col items-center mb-12 '> 
              <img className='w-44 rounded-4xl  h-44' src="https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg" alt="" />
              <p className='text-3xl font-bold text-white'> 600+</p>
              <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
           </div>

           <div className='w-46 flex flex-col items-center mb-12 '> 
              <img className='w-44  rounded-4xl h-44' src="https://images.pexels.com/photos/31679271/pexels-photo-31679271.jpeg" alt="" />
              <p className='text-3xl font-bold text-white'> 600+</p>
              <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
           </div>
        </div>
      </div>
    </div>

    {/* our product section */}
   <div className="h-auto w-full flex flex-wrap flex-col  text-center p-10">
     <div className='w-full h-auto flex flex-wrap flex-col items-center'>
        <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center'>"Our Products"</p>

        <div className='w-36 h-1 border-b-4 border-yellow-400 m-2 rounded-2xl md:mt-4 mb-12  '></div>
      

      <div className='w-[90%] h-auto flex flex-wrap justify-around'>

        <div className='w-64 flex flex-col items-center mb-12 m-2 border-white border-2 rounded-xl p-2'>
          <img src="https://images.pexels.com/photos/5435044/pexels-photo-5435044.jpeg" alt="" />
          <p className='text-3xl font-bold text-white '>PW Skills lab</p>
          <p className='text-3xl font-bold text-gray-500 '>Supercharge your project development with our robust lab.</p>
        </div>
         <div className='w-64 flex flex-col items-center mb-12 m-2 border-white border-2 rounded-xl p-2'>
          <img src="https://images.pexels.com/photos/5435044/pexels-photo-5435044.jpeg" alt="" />
          <p className='text-3xl m-2 font-bold text-white '>PW Skills lab</p>
          <p className='text-3xl font-bold text-gray-500 '>Supercharge your project development with our robust lab.</p>
        </div>
         <div className='w-64 flex m-2 flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
          <img src="https://images.pexels.com/photos/5435044/pexels-photo-5435044.jpeg" alt="" />
          <p className='text-3xl m-2 font-bold text-white '>PW Skills lab</p>
          <p className='text-3xl font-bold text-gray-500 '>Supercharge your project development with our robust lab.</p>
        </div>
         <div className='w-64 flex flex-col items-center mb-12 m-2 border-white border-2 rounded-xl p-2'>
          <img src="https://images.pexels.com/photos/5435044/pexels-photo-5435044.jpeg" alt="" />
          <p className='text-3xl font-bold text-white '>PW Skills lab</p>
          <p className='text-3xl font-bold text-gray-500 '>Supercharge your project development with our robust lab.</p>
        </div>
         <div className='w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2'>
          <img src="https://images.pexels.com/photos/5435044/pexels-photo-5435044.jpeg" alt="" />
          <p className='text-3xl font-bold text-white '>PW Skills lab</p>
          <p className='text-3xl font-bold text-gray-500 '>Supercharge your project development with our robust lab.</p>
        </div>
        

        
      </div>
      </div>
   </div>


    </>
  )
}

export default App
