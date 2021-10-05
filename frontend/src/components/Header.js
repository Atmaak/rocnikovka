import React from 'react'

const Header = ({ title, btnName, onClick }) => {
    return (
        <header>
            <h1>{title}</h1>
            <button onClick={onClick}>{btnName}</button>
        </header>
    )
}

export default Header
