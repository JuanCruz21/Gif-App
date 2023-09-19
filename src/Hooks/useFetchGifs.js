import { useEffect, useState } from "react"
import { getGifs } from "../helper/Api"

export const useFetchGifs = ( category ) => {
  const [Images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
      getImages()
    }, [])

    return {
      Img: Images,
      isLoading: isLoading
    }
}
