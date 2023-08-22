import React from 'react'
import { BarNav } from './BarNav'
import { useState, useEffect } from 'react';
import Card from './Card';


function Body() {

let [newHomework, setNewHomerWork] = useState([])




const removeHomework = (index) => {
    const updatedHomework = newHomework.filter((_, i) => i !== index);
    setNewHomerWork(updatedHomework);
  };

useEffect(() => {

}, [newHomework])


  return (
    <div className='react-container'>
    <React.Fragment>
        <BarNav setNewHomerWork={setNewHomerWork} newHomework={newHomework} />
        <div className='list-presentacion'>
            <h1 style={{color: "white", fontSize: "50px", fontWeight: "bold", textAlign: "center"}}>You Homework List</h1>

        <Card newHomework={newHomework} removeHomework={removeHomework} />
        
        </div>
    </React.Fragment>

  </div>)
}

export default Body