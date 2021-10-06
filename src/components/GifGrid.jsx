import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [category])

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=16&api_key=iQwjr1DHDaIhKJPz1r7aVoJEHXNw3G6H`;

        const resp = await fetch(url);

        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        setImages(gifs)
    }

    return (
        <>
            <div className="row mt-4 ">

                {
                    images.map(image => {
                        return (
                            <div className="col-3  ">
                                <div className="card mb-4 shadow ">
                                    <img src={image.url} className="" alt="..." style={{ maxWidth: '500px', maxHeight: '200px' }} ></img>
                                    <div className="card-body">
                                        <p className="card-text">{image.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
