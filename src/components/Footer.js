import React from "react"


import './Footer.css'

function Footer()
{
    const list=["kontakt","FAQ","Sklep","Restauracje"]
    return(
        <div className="Footer">
         <ul >
            {list.map((item,index)=>
            (
                <p key={index}>{item}</p>
            ))}
         </ul>
        </div>
    )
}


export default Footer 