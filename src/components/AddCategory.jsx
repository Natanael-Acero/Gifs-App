import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(categories => [
            ...categories, inputValue
        ]);

        setInputValue('');
    }

    return (
        <>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2 "
                    type="text"
                    placeholder="Category name"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className="btn btn-success">Add</button>
            </form>

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
