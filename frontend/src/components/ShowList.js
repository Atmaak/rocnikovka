import React, { useState, useEffect } from "react";

import Item from "./list/Item";

import AddItem from "./list/AddItem";

const ShowList = ({ id_sez, showAddItem, setShowAddItem, mark, refresh, setRefresh }) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getList = async (id_sez) => {
      const dataFromServer = await displayList(id_sez, mark);
      if(dataFromServer !== undefined){
        await setList(dataFromServer);
      }
    };
    getList(id_sez);
  }, [mark, id_sez, refresh]);


  const displayList = async (id_sez, mark) => {
    if(id_sez === undefined) return

    const fetchList = await fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_sez":${id_sez}, "mark": ${mark}}`,
    });
    return await fetchList.json();;
  };

  return (
    <>
      <div className="body">
      {showAddItem && <AddItem id_sez={id_sez} setShowAddItem={setShowAddItem} setRefresh={setRefresh} refresh={refresh}/>}
      <div className="itemy">
        <Item items={List} refresh={refresh} setRefresh={setRefresh}/>
      </div>
      </div>
    </>
  );
};



export default ShowList;
