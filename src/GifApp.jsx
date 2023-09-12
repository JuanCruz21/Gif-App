import { useState } from "react"


export const GifApp = () => {
  const [categorias, setCategorias] = useState(['One Punch', 'Drama'])
  console.log(categorias)

  const onAddCategory = ()=>{
    setCategorias(categorias => categorias.concat("dato"))
  }

  return (
    <>
    <h1>Gif App</h1>
    <input type="text" placeholder="Buscar gif"/>
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
      {categorias.map(category =>{
        return <li key={category}>{category}</li>
      })}
    </ol>
    </>
  )
}