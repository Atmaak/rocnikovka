import React, { useRef } from 'react'

const EditItem = ({ item }) => {
    const name = useRef();
    const count = useRef();
    
    const editItem = (e) => {
        e.preventDefault();

        var nazev = name.current.value
        var kusy = count.current.value
        
        if(name.current.value === '') nazev = item.nazev
        if(count.current.value === '') kusy = item.kusy

        fetch("http://localhost:3001/item/edit", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_pol: item.id_pol, 
                nazev: nazev, 
                kusy: kusy
            })
        })

        name.current.value = ''
        count.current.value = ''
    }
    return (
        <div>
            <form onSubmit={(e) => {editItem(e)}}>
                <input type="text" placeholder="name" ref={name} size="1" style={{width: '100%'}}/>
                <br />
                <input type="number" placeholder="count" ref={count} size="1" min="1" style={{width: '100%'}}/>
                <br />
                <input type="submit" size="1" style={{width: '100%'}}/>
            </form>
        </div>
    )
}

export default EditItem
