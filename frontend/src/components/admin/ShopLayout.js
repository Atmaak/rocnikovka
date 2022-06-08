import fetch from 'node-fetch'
import React, {useEffect, useState } from 'react'

const ShopLayout = () => {
    const [shopy, setShopy] = useState()
    const [xd, setXD] = useState(false)
    useEffect(() =>{
      const getShopy = async () => {
        const res = await fetch('http://localhost:3001/type/getShops')
        await setShopy(await res.json(``))
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
      //console.log(xd)
      setXD(!xd)

      
    }
   
    return (
      <>
        {
          shopy?.map((shop) => (
            <div key={shop.id_mark}>
              <h1>{shop.nazev}</h1>
              <button onClick={() => {deleteLayout(shop.id_mark)}}>dilit</button>
              <button onClick={() => {console.log('xdmoment')}}>edit</button>
            </div>  
          ))
        }
      </>
    )
  }
export default ShopLayout