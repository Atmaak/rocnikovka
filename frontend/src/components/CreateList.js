import React, { useRef } from "react";

const CreateList = ({ id_uzi }) => {
  const nazev = useRef()
  const createList = async () => {
    if(nazev.current.value === '') return
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
    nazev.current.value = ''
  };

  return (
    <form onSubmit={(e) => {e.preventDefault(); createList()}}>
      <input type="text" placeholder="Name for da list" ref={nazev}/>
      <br />
      <input type="submit" value="Create List"/>
    </form>
  );
};

export default CreateList;
