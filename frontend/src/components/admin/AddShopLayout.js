import React, { useState, useEffect, useRef } from 'react'

import fetch from 'node-fetch'

const AddShopLayout = () => {
  const [types, setTypes] = useState([])
  const [err, setErr] = useState('')
  useEffect(() => {
    const fetchIt = async () => {
      const res = await fetch("http://localhost:3001/item/types")
      const data = await res.json()
      data.sort(function(a, b) {
        return parseFloat(a.id_szn) - parseFloat(b.id_szn);
    });
    if(data)
      setTypes(data)
    }
    fetchIt()
  },[])

  const max = types.length;
  const data = useRef()
  var array = []
  const onSubmit = (e) => {
    e.preventDefault()
    for (let i = 0; i < max+1; i++) {
      array[i] = data.current[i].value
    }
    if(hasDuplicates(array)) return setErr('You need to put unique numbers as positions')
    setErr('')

    fetch("http://localhost:3001/test", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        "nazev": array[0],
        "serazeni": array.slice(1)
      })
    })
  }

  const hasDuplicates = (array) => {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
  
  return (
    <div className="AddShopLayout">
      <h1>Add Shop Layout</h1>
        <p>Put number that coresponds to place in the store into the input that has the correct type</p>
        <form onSubmit={(e)=>{onSubmit(e)}} ref={data}>
          <input type="text" placeholder="Name of da shop"/>
          <br />
        {types.map((type)=>{
          return <>
          <input type="number" placeholder={(type.nazev)[0].toUpperCase() + (type.nazev).slice(1)} min="0" max={max} key={type.id_szn}/>
          </>
        })}
        <input type="submit" />
        </form>
        <p className="err">{err}</p>
    </div>
  )
}

export default AddShopLayout