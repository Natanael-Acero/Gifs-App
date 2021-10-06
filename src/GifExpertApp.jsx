import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import { Navbar } from './components/Navbar'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Facebook', 'WhatApp', 'Instagram', 'Telegram', 'ReactJS', 'Web', 'COVID'])
    const [categoryToShow, setCategoryToShow] = useState('Dogs');


    const handleCategory = (category) => {
        setCategoryToShow(category)
    }

    return (
        <>
            <Navbar setCategoryToShow={setCategoryToShow} />

            <hr />
            <div className="row">
                <div className="col-9">
                    <h4>Trending Categories</h4>
                </div>
                <div className="col-3">
                    <AddCategory setCategories={setCategories} />
                </div>
                <div className="col-12">
                    {
                        categories.map(category => {
                            return <span type="button" onClick={() => {
                                setCategoryToShow(category)
                            }} className="badge bg-primary p-2 m-1" key={category}>{category}</span>
                        })
                    }
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <GifGrid category={categoryToShow} />
                </div>

            </div>



        </>
    )
}

export default GifExpertApp
