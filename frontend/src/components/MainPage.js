import React, { useState, useEffect } from "react";

import List from "./List";
import ShowList from "./ShowList";
import CreateList from "./CreateList";
const MainPage = ({ id }) => {
  const [lists, setLists] = useState([]);
  const [id_sez, setId_Sez] = useState([0]);
  useEffect(() => {
    const fetchLists = async () => {
      const res = await fetch("172.105.71.33:3001/displayNewestList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{"id":${id}}`,
      });
  
      const data = await res.json();
      return data;
    };
    const getLists = async () => {
      const listsFromServer = await fetchLists();
      await setLists(listsFromServer);
    };
    getLists();
  }, [lists]);


  const showList = (id_sez) => {
    setId_Sez(id_sez);
  };
  return (
    <>
      <CreateList id_uzi={id} />
      <div className="row">
        <List lists={lists} funkce={showList} setId_Sez={setId_Sez} />
      </div>
      <ShowList id_sez={id_sez} lists={lists} />
    </>
  );
};

export default MainPage;
