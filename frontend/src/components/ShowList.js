import React, { useState, useEffect } from "react";

import Item from "./Item";

import AddItem from "./AddItem";

const ShowList = ({ id_sez }) => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getList = async (id_sez) => {
      const dataFromServer = await displayList(id_sez);
      if(dataFromServer === undefined){
        return
      }
      await setList(dataFromServer);
    };
    getList(id_sez);
  }, [List, id_sez]);

  const displayList = async (id_sez) => {
    if(id_sez === undefined) return
    //console.log(id_sez)
    const fetchList = await fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_sez":${id_sez}}`,
    });
    const data = await fetchList.json();
    return data;
  };
  return (
    <>
      {(id_sez > 0) && <AddItem id_sez={id_sez} />}
      <div className="itemy">
        <Item items={List} />
      </div>
    </>
  );
};

export default ShowList;
