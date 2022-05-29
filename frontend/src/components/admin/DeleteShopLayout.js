import fetch from 'node-fetch'
import React, {useEffect, useState } from 'react'
import StoreXD from './Store'
const DeleteShopLayout = () => {
    const [stores, setStores] = useState()
    
    useEffect(() =>{  
        const fetchData = async () => {
          const res = await fetch('http://localhost:3001/type/getShops')
          const data = await res.json()
          await setStores(data)
        }
        fetchData()
    },[])


    return (
      <div>
          {stores?.map((typ) => {
            <div key={typ.id_szn}>
              <h1>{typ.nazev}</h1>
              {console.log(typ.nazev)}
            </div>
          })}
          </div>
    )
}

export default DeleteShopLayout