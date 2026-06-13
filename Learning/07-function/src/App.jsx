import React from 'react'

const App = () => {
  
//   function btnClicked(){
//     console.log('btn clicked');
//   }

//   function mouseEnter(){
//     console.log("mouse entered");
//   }
  
//   function inputChanging(value) {
// console.log(value);
//   }
   
  return (
    <div>
      {/* <h1>Hello , Atique</h1>

      <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>change user</button>



       <input onChange={function (elem) {
        console.log(elem)
          console.log(elem.target.value)
       }} type="text" placeholder='Enter Name' />


         <input onChange={function (elem) {
        inputChanging(elem.target.value)
       }} type="text" placeholder='without func call' /> */}

       <div onMouseMove={(elem) => {
        console.log(elem.clientX);
       }} className='box'></div>
    </div>
  )
}

export default App