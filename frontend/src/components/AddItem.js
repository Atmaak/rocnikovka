import fetch from 'node-fetch';
import React, { useRef, useState, useEffect } from 'react';

const AddItem = ({ id_sez }) => {
  const [data, setData] = useState([])
  const [id_szn, setIdszn] = useState(0)
  const [error, setError] = useState('')
  var nazev = useRef();
  var kusy = useRef();

  useEffect(() => {
    fetchdata()
  },[])

  const fetchdata = async () => {
    const res = await fetch('http://localhost:3001/item/types')
    const dat = await res.json()
    setData(dat)
  }
  const addIt = () => {
    fetch("http://localhost:3001/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
                "item": "${nazev.current.value}",
                "id_sta": 2,
                "id_sez": ${id_sez},
                "kusy": ${kusy.current.value},
                "id_szn": ${id_szn}
            }`,
    });
  };
  const doIt = async (e) => {
    e.preventDefault();
    if (
      nazev.current.value.length >= 2 &&
      kusy.current.value.length >= 1 &&
      id_szn != 0
    ) {
      await addIt(nazev.current.value, kusy.current.value, id_sez);
      nazev.current.value = null;
      kusy.current.value = null;
      setIdszn(0)
      setError('')
    }
  }
  return (
    <>
      <div className="addIt">
        {id_sez > 0 && (
          <>
          <form onSubmit={(e) => {doIt(e)}}>
            <input type="text" placeholder="Nazev" ref={nazev}/>
            <br />
            <input type="number" ref={kusy} placeholder="Kusy" min="1" />
            <br />
          <div className="types">{data.map((item) => {
            return <button onClick={(e) => {e.preventDefault(); setIdszn(item.id_szn)}} key={item.id_szn}>{item.nazev}</button>
          })}</div>
          {error && <p className='err'>{error}</p>}
            <br />
            <input type="submit"/>
          </form>
          </>
        )}
      </div>
    </>
  );
};

export default AddItem;
