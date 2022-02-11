import fetch from "node-fetch";
import React, { useRef, useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
const  AddToFamily = ({setShowAddToFamily}) => {
  const [err, setErr] = useState("");
  
  const close = (e) => {
    if (e.target.classList[0] === "popup") setShowAddToFamily(false);
  };
  return <div
  className="popup"
  onClick={(e) => {
    close(e);
  }}
>
  <div className="popup_inner">
    <span
      className="close"
      onClick={(e) => {
        setShowAddToFamily(false);
      }}
    >
      <CgCloseR />
    </span>
    <div className="form">
        <>
          <h1>Add to Family</h1>
          <form>
              <input type="email" placeholder="Type Email of your family member."/>
              <input type="submit" />
          </form>
          {err && (
            <>
              <p className="err">{err}</p> <br />
            </>
          )}
        </>
    </div>
  </div>
</div>;
}

export default AddToFamily;
