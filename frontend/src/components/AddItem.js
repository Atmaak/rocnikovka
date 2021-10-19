import React from 'react'

const AddItem = () => {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label>Nazev Itemu</label>
            <input type="text" placeholder="Nazev Itemu"/>
            <input type="submit" />
        </form>
    )
}

export default AddItem
