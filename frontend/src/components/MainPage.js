import React, { useState, useEffect } from "react";

import List from "./List";
import ShowList from "./ShowList";

const MainPage = ({ id }) => {
  const [lists, setLists] = useState([]);
  const [id_sez, setId_Sez] = useState([0])
  useEffect(() => {
    const getLists = async () => {
      const listsFromServer = await fetchLists();
      await setLists(listsFromServer);
    };

    getLists();
  }, []);

  const getLists = async () => {
    const listsFromServer = await fetchLists();
    console.log(listsFromServer);
    setLists(listsFromServer);
    console.log(lists);
  };

  const fetchLists = async () => {
    const res = await fetch("http://localhost:3001/displayNewestList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id":${id}}`,
    });

    const data = await res.json();
    
    return data;
  };

  const showList = (id_sez) => {
    //console.log(id_sez)
    setId_Sez(id_sez)
  }
    return (
      <>
        <div className="row"><List lists={lists} funkce={showList}/></div>
        <ShowList id_sez={id_sez}/>
      </>);
};

export default MainPage;
