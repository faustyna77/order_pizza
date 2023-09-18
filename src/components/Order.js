import './Order.css'
import cheese from '../assets/cheese.jpg'
import pepper from '../assets/pepper.png'
import tomatoes from '../assets/tomatoes.jpg'
import corn from '../assets/corn.png'
import mozarella from '../assets/mozarella.jpg'
import wild from '../assets/wild.png'
import mushrooms from '../assets/mushrooms.png'

import React from "react"
import { useState,Component } from "react"

function Order(){


    const [isChecked1,setisChecked1]=useState(false)
    const [isChecked2,setisChecked2]=useState(false)
    const [isChecked3,setisChecked3]=useState(false)
    const [isChecked4,setisChecked4]=useState(false)
    const [isChecked5,setisChecked5]=useState(false)
    const [isChecked6,setisChecked6]=useState(false)
    const [isChecked7,setisChecked7]=useState(false)
  
  const price1=1.50
  const price2=2.20
  const price3=2.70
  const price4=2.40
  const price5=2.70
  const price6=6.50
  const price7=3.50


    const isChecked1Function=()=>
    {
        setisChecked1(!isChecked1)
    }
     
    const isChecked2Function=()=>
    {
    setisChecked2(!isChecked2)
    }

    const isChecked3Function=()=>
    {
        setisChecked3(!isChecked3)
    }
 
    const isChecked4Function=()=>
    {
        setisChecked4(!isChecked4)
    }
 
    const isChecked5Function=()=>
    {
        setisChecked5(!isChecked5)
    }
    const isChecked6Function=()=>
    {
        setisChecked6(!isChecked6)
    }

    const isChecked7Function=()=>
    {
        setisChecked7(!isChecked7)
    }
 

    const total=()=>
    {
        let total=0
        if(isChecked1)
        {
            total+=price1
        }
        if(isChecked2)
        {
            total+=price2
        }if(isChecked3)
        {
            total+=price3
        }if(isChecked4)
        {
            total+=price4
        }if(isChecked5)
        {
            total+=price5
        }if(isChecked6)
        {
            total+=price6
        }if(isChecked7)
        {
            total+=price7
        }
        return total;
    }
    
       return(
        <div>
            <h2>Wybierz dodatki</h2>
            <ul className='order-list'>
           
                <input type="checkbox" checked={isChecked1} onChange={isChecked1Function}></input>
                <label>kukurydza ${price1}</label>
              
                <img src={corn} alt="ser" width="100px" height="100px"></img>
                <input type="checkbox" checked={isChecked2} onChange={isChecked2Function}></input>
                <label>pomidory ${price2}</label>
                <img src={tomatoes} alt="ser" width="100px" height="100px"></img>
                <input type="checkbox" checked={isChecked3} onChange={isChecked3Function}></input>
                <label>peperoni ${price3}</label>
                <img src={pepper} alt="ser" width="100px" height="100px"></img>
                <input type="checkbox" checked={isChecked4} onChange={isChecked4Function}></input>
                <label>pieczarki ${price4}</label>
                <img src={mushrooms} alt="ser" width="100px" height="100px"></img>
                <input type="checkbox" checked={isChecked5} onChange={isChecked5Function}></input>
                <label>mozarella ${price5}</label>
                <img src={mozarella} alt="ser" width="100px" height="100px"></img>
                <input type="checkbox" checked={isChecked6} onChange={isChecked6Function}></input>
                <label>łosoś ${price6}</label>
                <img src={wild} alt="ser" width="100px" height="100px"></img>
                <input type="checkbox" checked={isChecked7} onChange={isChecked7Function}></input>
                <label>ser ${price7}</label>
                <img src={cheese} alt="ser" width="100px" height="100px"></img>

                <p className='result'>łaczna cena ${total()}</p>

               

            </ul>

        </div>
       )
    



}

export default Order