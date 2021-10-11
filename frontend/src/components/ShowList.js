import React, { useState, useEffect } from "react";

import Item from "./Item";

const ShowList = ({ id_sez }) => {
const [List, setList] = useState([])

useEffect(() => {
    const getList = async (id_sez) => {
        const dataFromServer = await displayList(id_sez)
        await setList(dataFromServer)
    }
    getList(id_sez)
  }, []);


  const displayList = async (id_sez) => {
    const fetchList = await fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_sez":${id_sez}}`,
    });
    const data = await fetchList.json();
    return data
  };

  return <Item items={List}/>;
};
//
export default ShowList;
