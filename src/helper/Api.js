
export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Tn4CoYzdpBTdtchACpiE2iNHtPJkop7Y&q=${category}&limit=10`
    const response = await fetch(url);
    const { data=[] } = await response.json()
    console.log(data)
    const gifs = data.map( img =>(
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    )
    return gifs
}