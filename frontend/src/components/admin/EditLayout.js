import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";

const EditLayout = () => {
  const [typy, setTypy] = useState();
  const [refresh, setRefresh] = useState(false)

  const [poradi] = useState([]);
  const [pocet] = useState([]);
  
  const nazev = useRef()
  const mesto = useRef()

  useEffect(() => {
    const getTypy = async () => {
      const res = await fetch("http://localhost:3001/item/types");
      await setTypy(await res.json());
    };
    getTypy();
  }, []);

  const poradiSet = (item) => {
    if (pocet.includes(item.id_szn)) return;
    poradi[poradi.length] = item;
    pocet[pocet.length] = item.id_szn;
    setRefresh(!refresh)
  };

  const sendLayout = () => {
    if (poradi.length < 8) return;
    fetch("http://localhost:3001/shop/addLayout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shop: {
          nazev: nazev.current.value,
          mesto: mesto.current.value,
        },
        poradi: poradi
      }),
    })
    window.location.reload()
  };

  return (
    <>
      <div className="container">
        <div className="containerInputs">
          <input type="text" placeholder="Name of da shop" ref={nazev}/>
          <br></br>
          <input type="text" placeholder="City of da shop" ref={mesto}/>
          <br></br>
          <button
            id="btn"
            onClick={() => {
              sendLayout();
            }}
          >
            Send It
          </button>
        </div>
        <div className="row selectnute">
          {poradi?.map((item) => (
            <div key={item.id} className="item">
              <h6>{item.nazev}</h6>
              {console.log(item)}
            </div>
          ))}
        </div>
        <div className="row selectnute">
          {typy?.map((item) => (
            <div
              key={item.id}
              onClick={(e) => {
                poradiSet(item);
                e.target.classList.add("hidden");
              }}
              className="itemos"
            >
              {item.nazev}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EditLayout;
