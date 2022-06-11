import fetch from 'node-fetch'
import React, {useEffect, useState } from 'react'

const ShopLayout = () => {
    const [shopy, setShopy] = useState()
    const [xd, setXD] = useState(false)
    useEffect(() =>{
      const getShopy = async () => {
        const res = await fetch('http://localhost:3001/type/getShops')
        var data = await res.json()        
        data = data.slice(0,0).concat(data.slice(1))
        setShopy(await data)
      }
      getShopy()
    }, [xd])
  
    const deleteLayout = async (id_mark) => {

      fetch('http://localhost:3001/shop/delete', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{
            "id_mark": ${id_mark}          
        }`,
      })
      setXD(!xd)

      
    }
   
    return (
      <div className="shopy">
        {
          shopy?.map((shop) => (
            <div key={shop.id_mark}>
              <h1>{shop.nazev}</h1>
              <button onClick={() => {deleteLayout(shop.id_mark)}} className="buttonosShop buttonos">Delete</button>
           </div>  
          ))
        }
      </div>
    )
  }
export default ShopLayout