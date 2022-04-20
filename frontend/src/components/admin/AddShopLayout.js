import React, { useState, useEffect, useRef } from 'react'

import fetch from 'node-fetch'
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AddShopLayout = () => {
  const [typy, setTypy] = useState();
  const [shopy, setShopy] = useState()

  const drop = useRef()

  useEffect(() =>{
    const getTypy = async () => {
      const res = await fetch('http://localhost:3001/item/types')
      const data = await res.json()
      await setTypy(data)
    }
    
    const getShops = async () => {
      var xd = []
      const res = await fetch('http://localhost:3001/type/getShops')
      const data = await res.json()
      for (let i = 0; i < data.length; i++) {
        xd[i] = { value: data[i].nazev, id_mark: data[i].id_mark };
      }
      await setShopy(xd)
    }

    getShops()
    getTypy()
    console.log(shopy)
    console.log(typy)



  }, [])


 
  return (
    <div className="AddShopLayout">
      <div><Dropdown
          options={shopy}
          placeholder="Select type of list"
          ref={drop}
        /></div>

        
    </div>
  )
}

export default AddShopLayout