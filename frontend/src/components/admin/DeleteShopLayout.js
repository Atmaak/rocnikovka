import fetch from 'node-fetch'
import React, {useEffect, useState } from 'react'

const DeleteShopLayout = () => {
    const [stores, setStores] = useState()
    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/type/getShops')
        await setStores(await data.json(``))
    }
    useEffect(() =>{  
        fetchData()
    })


  return (
      <div>
      {stores?.map((store) => {
          <div key={store.id_mark}>
            <h1>{store.nazev}</h1>
          </div>
        })}
      </div>
  )
}

export default DeleteShopLayout