import React, { useRef, useEffect, useState } from "react";
import { CgCloseR } from "react-icons/cg";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CreateList = ({ id_uzi, setShowCreateList }) => {
   //['alko', 'děti', 'elektronika', 'koupelna', 'maso', 'mléčné výrobky', 'nádobí', 'nealko', 'oblečení', 'ovoce a zelenina', 'pečivo', 'sladkosti', 'uzeniny', 'zahrada', 'zamražené']
  
  const [options, setOptions] = useState()
  useEffect(() => {
    var xd = []
    const fillOptions = async () => {
      const res = await fetch("http://localhost:3001/item/types");
      const data = await res.json();
      for (let i = 0; i < data.length; i++) {
        xd[i] = data[i].nazev
      }
      
    };
    fillOptions();
    xd.sort()
    setOptions(xd)
  },[]);
  
  const drop = useRef()
  const nazev = useRef();

  const createList = async () => {
    console.log(drop.current.state.selected.value)
    if (nazev.current.value === "") return;
    await fetch("http://localhost:3001/list/createList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
                "id_uzi": ${id_uzi},
                "nazev": "${nazev.current.value}",
                "type": "${drop.current.state.selected.value}"
            }`,
    });
    nazev.current.value = "";
    setShowCreateList(false);
  };
  const close = (e) => {
    if (e.target.classList[0] === "popup") setShowCreateList(false);
  };

  return (
    <div
      className="popup"
      onClick={(e) => {
        close(e);
      }}
    >
      <div className="popup_inner createList">
        <span
          className="close"
          onClick={(e) => {
            setShowCreateList(false);
          }}
        >
          <CgCloseR />
        </span>
        <div className="form">
          <br />
          <h1>Create List</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createList();
            }}
          >
            <input type="text" placeholder="Name for da list" ref={nazev} />
            <br />
            <Dropdown
              options={options}
              placeholder="Select an option"
              ref={drop}
            />
            <br />
            <input type="submit" value="Create List" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateList;
