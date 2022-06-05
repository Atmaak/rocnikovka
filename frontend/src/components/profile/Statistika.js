import React, { useEffect, useState } from 'react';

const Statistika = (id_uzi) => {
  const [stats, setStats] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3001/list/getCompletedLists', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"id_uzi": id_uzi})
      });
      const data = await res.json()
      data.sort()
      let median = data[parseInt((data.length)/2)]
      let celkem = 0
    for (let i = 0; i < data.length; i++) {
      celkem += data[i].cena
    }
    setStats(await {"prumer": (celkem / data.length), "celkem": celkem})
      
    }
    getData()
  }, [])
  
  
  return (
    <> 
      <h1>Průměr: {stats.prumer} kč</h1>
      <h1>Cena celkem: {stats.celkem} kč</h1>
    </>
  )
}

export default Statistika