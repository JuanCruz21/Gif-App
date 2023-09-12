import { useState } from "react"
//Siempre resive el event
export function AddCategory() {
    const [value,SetValue] = useState('')
    const onInputChange = ({target})=>{
        SetValue(target.value)
    }
    const onSubmite = (event) =>{
        event.preventDefault()
    }
  return (
    <form onSubmit={ (event)=>onSubmite(event)} >
        <input 
        type="text" 
        placeholder="Buscar gifs" 
        value={ value } 
        onChange={ onInputChange }/>
    </form>
  )
}
