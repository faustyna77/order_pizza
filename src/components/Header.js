import './Header.css';
import small_pizza from '../assets/pizza_small.png';

import React, { useState } from 'react';
import  Order from '../components/Order.js'

function Header() {
  const [clicked, setClicked] = useState(false);
  const [cliked2,setClicked2]=useState(false)
  const [clicked3,setClicked3]=useState(false)

  const setClickedFunction = () => {
    setClicked(!clicked);
    checkclicked()
  };
 const setClickedFunctionTwo=()=>
 {
    setClicked2(!cliked2)
    checkclicked()
 }
 const setClickedFunctionThree=()=>
{
    setClicked3(!clicked3)
    checkclicked()
}
 const checkclicked=()=>
 {
    
    if(clicked===true)
    {
       
        setClicked2(false)
        setClicked3(false)
    }if(cliked2===true)
    {
        
       
        setClicked(false)
        setClicked3(false)
    }if(clicked3===true)
    {
      
        setClicked(false)
        setClicked2(false)
    }
 
 }

 const result=()=>
 {
    let total_val=0
   if(clicked===true)
   {
    total_val+=6
    Order.total+=6

   }if(cliked2===true)
   {
    total_val+=12
    Order.total+=12
   }if(clicked3===true)
   {
    total_val+=36
    Order.total+=36
   }
   return total_val
 }
 

  return (
    <div className='Header'>
      <h2>Wybierz wielkość pizzy! </h2>
      <p>mała</p>
      <img
        src={small_pizza}
        alt='small pizza'
        width='100px'
        height='100px'
        onClick={setClickedFunction}
        className={clicked ? 'clicked' : ''}
      />

      <p>średnia</p>
      <img src={small_pizza} alt='average pizza' width='150px' height='150px'
         onClick={setClickedFunctionTwo}
         className={cliked2? 'clicked':''}
      
      />
      <label>duża</label>
      <img src={small_pizza} alt='small pizza' width='200px' height='200px'
      onClick={setClickedFunctionThree}
      className={clicked3? 'clicked':''}
      />
      <p>Cena za wielkośc pizzy to ${result()}</p>
      
    </div>
  );
}

export default Header;
