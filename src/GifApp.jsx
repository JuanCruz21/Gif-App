import { useState } from "react"
import {AddCategory} from "./components/AddCategory"


export const GifApp = () => {
  const [categorias, setCategorias] = useState(['One Punch', 'Drama'])
  console.log(categorias)

  const onAddCategory = ()=>{
    setCategorias(categorias => categorias.concat())
  }

  return (
    <>
    <h1>Gif App</h1>
    <AddCategory onAddCategory />
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
      {categorias.map(category =>{
        return <li key={category}>{category}</li>
      })}
    </ol>
    </>
  )
}