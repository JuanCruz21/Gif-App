import { useState } from "react"
//Siempre resive el event
export function AddCategory({ onNewCategory }) {

    const [value,SetValue] = useState('')

    const onInputChange = ({target})=>{
        SetValue(target.value)
    }
    const onSubmite = (event) =>{
        event.preventDefault()
        if (value.trim().length <=1) return
        //setCategorias(categorias=> [ value, ...categorias ])
        onNewCategory(value.trim())
        SetValue('')
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
