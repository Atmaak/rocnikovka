import React, { useState, useEffect } from "react";

import Item from "./list/Item";

import AddItem from "./list/AddItem";

const ShowList = ({ id_sez, showAddItem, setShowAddItem }) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getList = async (id_sez) => {
      const dataFromServer = await displayList(id_sez);
      if(dataFromServer !== undefined){
        await setList(dataFromServer);
        //sortList()
      }
    };
    getList(id_sez);
  }, [List, id_sez]);

  const sortList = () => {
  }

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
  };/*
  const compare = (a, b) => {    
    if (a.) {    
      return -1;    
    }    
    if (a is greater than b by the ordering criterion) {    
      return 1;    
    }    
    // a must be equal to b    
    return 0;    
  } /*/

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
