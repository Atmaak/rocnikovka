import React, { useState, useEffect } from "react";

import Item from "./list/Item";

import AddItem from "./list/AddItem";

const ShowList = ({ id_sez, showAddItem, setShowAddItem, mark }) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getList = async (id_sez) => {
      const dataFromServer = await displayList(id_sez, mark);
      if(dataFromServer !== undefined){
        await setList(dataFromServer);
        console.log(dataFromServer);
      }
    };
    getList(id_sez);
  }, [id_sez]);


  const displayList = async (id_sez, mark) => {
    if(id_sez === undefined) return
    const fetchList = await fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_sez":${id_sez}, "mark": "${mark}"}`,
    });
    console.log(`{"id_sez":${id_sez}}`); //, "mark": "${mark}"
    return await fetchList.json();;
  };

  return (
    <>
      <div className="body">
      {showAddItem && <AddItem id_sez={id_sez} setShowAddItem={setShowAddItem}/>}
      <div className="itemy">
        <Item items={List} />
      </div>
      </div>
    </>
  );
};



export default ShowList;
