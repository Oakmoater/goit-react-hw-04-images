import React from "react";

const Searchbar = ({onSubmit}) => {
    return (
        <header className='Searchbar'>
            <form className="SearchForm" onSubmit={onSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="button-label">Search</span>
                </button>
                <input
                className="SearchForm-input"
                type="text"
                name="input"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

export default Searchbar