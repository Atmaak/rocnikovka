import React, { useState, useEffect } from "react";

import Item from "./Item";

import AddItem from "./AddItem";

const ShowList = ({ id_sez, showAddItem, setShowAddItem, id_uzi }) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getList = async (id_sez) => {
      const dataFromServer = await displayList(id_sez);
      if(dataFromServer !== undefined){
        await setList(dataFromServer);
      }
      
    };

    getList(id_sez);
  }, [List, id_sez]);

  const displayList = async (id_sez) => {
    if(id_sez === undefined) return
    const fetchList = await fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_sez":${id_sez}}`,
    });
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
