import React, { useRef, useEffect, useState } from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { CgCloseR } from "react-icons/cg";


const AddTypeToList = ({setShowIt, doIt, err}) => {
  const [options, setOptions] = useState();
  const drop = useRef()
  
  useEffect(() => {
    var xd = [];
    const fillOptions = async () => {
      const res = await fetch("http://localhost:3001/item/types");
      const data = await res.json();
      for (let i = 0; i < data.length; i++) {
        xd[i] = data[i].nazev;
      }
    };
    fillOptions();
    xd.sort();
    setOptions(xd);
  }, []);

  const close = (e) => {
    if (e.target.classList[0] === "popup") setShowIt(false);
  };


  return <><div
  className="popup"
  onClick={(e) => {
    close(e);
  }}
>
  <div className="popup_inner createList">
    <span
      className="close"
      onClick={(e) => {
        setShowIt(false);
      }}
    >
      <CgCloseR />
    </span>
    <div className="form">
      <br />
      <h1>Add type</h1>
      <form onSubmit={(e) => doIt(e, drop)}>
      <Dropdown
              options={options}
              placeholder="Select an option"
              ref={drop}
            />
            <input type="submit"/>
      </form>
      {err && (
                <>
                  <p className="err">{err}</p> <br />
                </>
              )}
    </div>
  </div>
</div></>
};

export default AddTypeToList;
