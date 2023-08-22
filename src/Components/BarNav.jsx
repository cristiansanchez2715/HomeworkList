import React, { useEffect, useState } from 'react'
import imageLogo from '../LogoCabecera.png'

function BarNav({setNewHomerWork, newHomework}) {
let [nameWork, setNameWork] = useState("")
let [hourWork, setHourWork] = useState(0)
let [imageWork, setImageWork] = useState()
let[homeworkDescription, setHomeworkDescription] = useState("")


let funcionalidadListName = () =>{
 // Crear un nuevo objeto con los valores actuales de nameWork y hourWork
 const newHomeworkItem = { name: nameWork, hour: hourWork, image: imageWork, description: homeworkDescription };
    
 // Actualizar el estado de newHomework con el nuevo objeto
 setNewHomerWork([...newHomework, newHomeworkItem]);}


  return (
    <header className='bar-nav-rigth-container'>
        <div className='bar-nav-rigth'>
            <div className='image-bar-nav-container'>
<img alt='image-bar-nav' src={imageLogo} />
</div>
<div>
    <h1 style={{color: "white", fontSize: "50px", fontWeight: "bold", textAlign: "center"}}>Work List</h1>
    <p style={{color: "white"}}>Ingrese una descripcion de la tarea a realizar</p>
    <textarea type='text' className='input-description' onChange={(e) => {
        let descriptionWork = e.target.value
        setHomeworkDescription(descriptionWork)
    }}></textarea>
</div>
<div>
    <p style={{color: "white"}}>Name of homework</p>
    <input type='text' className='input-hw-name-add' onChange={(e) => {
        let changeWork =  e.target.value
        setNameWork(changeWork)
        
    }}></input>
    <p style={{color: "white"}}>hour</p>
    <input type='time' className='input-hour-add' onChange={(e) => {
        let changeHourWork =  e.target.value
        setHourWork(changeHourWork)
        
    }}></input>

<input type='file' className='file-image' onChange={(e) => {
    let file = e.target.files[0]
    setImageWork(file)
}}></input>

    <button className='btn-add' onClick={() => {
     funcionalidadListName()
    }}>Add New Work</button>
</div>
        </div>
        </header>
  )


}
export { BarNav}