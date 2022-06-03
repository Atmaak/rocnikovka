import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";

const EditLayout = (shop) => {
  const [data, setData] = useState();
  const [typy, setTypy] = useState();

  const [poradi] = useState([]);
  const [pocet] = useState([]);
  
  const nazev = useRef()
  const mesto = useRef()

  useEffect(() => {
    const getTypy = async () => {
      const res = await fetch("http://localhost:3001/item/types");
      await setTypy(await res.json());

      console.log(shop);
    };
    getTypy();
    console.log(typy);
  }, []);

  const poradiSet = (item) => {
    if (pocet.includes(item.id_szn)) return;
    poradi[poradi.length] = item;
    pocet[pocet.length] = item.id_szn;
    console.log(poradi);
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
    });
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
              {item.nazev}
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
