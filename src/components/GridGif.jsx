import { useEffect, useState } from "react"
import { getGifs } from "../helper/Api"
import { GifItem } from "./GifItem"

export const AddGrid = ({ category })=>{

    const [Images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
            getImages()
        }, [])
    return (
        <>
        <div className="card-grid">
        {
            Images.map(({id, title, url}) =>(
                <GifItem key={ id } image={url} title={title}/>
            ))
        }
        </div>
        </>
 )
}