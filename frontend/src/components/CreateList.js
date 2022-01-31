import React, { useRef } from "react";
import { CgCloseR } from 'react-icons/cg'
const CreateList = ({ id_uzi, setShowCreateList }) => {
  const nazev = useRef();
  const createList = async () => {
    if (nazev.current.value === "") return;
    await fetch("http://localhost:3001/list/createList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
                "id_uzi": ${id_uzi},
                "nazev": "${nazev.current.value}"
            }`,
    });
    nazev.current.value = "";
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
        <form onSubmit={(e) => {e.preventDefault(); createList()}}>
<input type="text" placeholder="Name for da list" ref={nazev}/>
<br />
<input type="submit" value="Create List"/>
</form></div>
      </div>
    </div>
  );
};
/*
*/
export default CreateList;
