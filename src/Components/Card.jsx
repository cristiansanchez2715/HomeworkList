
import { useState } from 'react'
import React from 'react';
import Detaills from './Detaills';


function Card({ newHomework, removeHomework }) {



{/* <Routes>
<Route path="/Card/{index}" key={index} element={Detaills} />
</Routes> */}
  


    const checkHomeworkExistence  =() => {  
        
      return newHomework.map((homework, index) => (
        
        <div key={index} className='card-container'>
            <button className='close-window' onClick={() => {
            removeHomework(index);
          }}>X</button><div className='card-content-cpntainer'>
            <div>
            <button className='btn-watch' onClick={() => {
              let oculto = document.querySelector(".description-container")
              oculto.classList.toggle("active")
            }}>First Work Details</button>
          <h2>Homework: {homework.name}</h2>
          <h2>Hour: {homework.hour}</h2>


          <span className='description-container' key={index}>
            <h2 id='homework'>Homework:<br></br> {homework.name}</h2>
            <p>Description: {homework.description}</p>
          </span>


          </div>
          <div>
        
          <img className='image-card' src={URL.createObjectURL(homework.image)}/> 
          
       
          </div>

          </div>
          
          </div>
      ));
    }

    return (
        <div>
          {checkHomeworkExistence(newHomework)}
        </div>
      );
}
    
;


export default Card;