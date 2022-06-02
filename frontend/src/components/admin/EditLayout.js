import React, { useState, useEffect } from 'react'
import fetch from 'node-fetch'

const EditLayout = (shop) => {
const [data, setData] = useState()
const [typy, setTypy] = useState();
const [poradi, setPoradi] = useState([])
const [xd, setXd] = useState([])
useEffect(() => {
    const getTypy = async () => {
        const res = await fetch('http://localhost:3001/item/types')
        await setTypy(await res.json())
      }
    getTypy()
})

const poradiSet = (item) => {
    if(poradi.includes(item)) return
    poradi[poradi.length] = item;
    console.log(poradi)
    console.log(item)
    console.log(poradi.length)
}


  return (
    <>
    {
        typy?.map((item) =>(
            <div key={item.id} onClick={() => {poradiSet(item)}}>
                {item.nazev}
            </div>
            
        ))
    }
    </>
  )
}

export default EditLayout