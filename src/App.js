import React from 'react'
import { useState } from 'react'
import './index.css'


export const App = () => {

  const [inputList , setInput] = useState('');
  const [item , setitem] = useState([]);
    
  const itemEvent = (event) =>{
    setInput(event.target.value);

  };
  const listofItem =()=>{
    setitem((oldItem)=>{
      return [...oldItem,inputList]
    });
    setInput('');


  }


  const deleteitem = () => {

    console.log("fvjdj")
  }
  return (
    
    <div className="maindiv">
      <div className= "centerdiv">
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" placeholder="input task here"
        value ={inputList}
        onChange={itemEvent}  />
        <button onClick={listofItem}>+</button>
        <ol>
       {   item.map((itemval)=>{
            return( 
            <>
            <div className = "todostyle">
              <button1  onClick={deleteitem}>x</button1>
            <li>{itemval}</li>
            </div>
            </>
            )
          })}
        </ol>
      

      </div>

    </div>
   
    
  )
}
export default App;
