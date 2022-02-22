import React, { useState, useEffect } from "react";

import List from "./List";
import ShowList from "./ShowList";
import CreateList from "./CreateList";
import AddToFamily from "./mainpage/AddToFamily"
import AdminPanel from "./admin/AdminPanel";

const MainPage = ({ id, showCreateList, setShowCreateList, setShowAddToFamily, showAddToFamily }) => {
  const [lists, setLists] = useState([]);
  const [id_sez, setId_Sez] = useState(0);
  const [showAddItem, setShowAddItem] = useState(false);
  const [sezIsShown, setSezIsShown] = useState(false);
  const [admin, setIsAdmin] = useState(false);
  useEffect(() => {
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
    const getLists = async () => {
      const listsFromServer = await fetchLists();
      await setLists(listsFromServer);
    };
    getLists();
  }, [lists, id]);

  useEffect(() => {
    const fetchIt = async () => {
      const res = await fetch("http://localhost:3001/user/isAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: `{
        "id_uzi": ${id}
      }`
    })
    const data = await res.json()
    setIsAdmin(data)
    }

    fetchIt()
  })

  const showList = (id) => {
    if(id === id_sez) {
      setId_Sez(0);
      return setSezIsShown(!sezIsShown)
    }
    setSezIsShown(true)
    setId_Sez(id);
  };
  return (
    <>
    {showAddToFamily&& <AddToFamily setShowAddToFamily={setShowAddToFamily} id_uzi={id}/>}
      {showCreateList && <CreateList id_uzi={id} setShowCreateList={setShowCreateList}/>}
      <div className="row">
        <List lists={lists} showList={showList} setId_Sez={setId_Sez} setShowAddItem={setShowAddItem} showAddItem={showAddItem} sezIsShown={sezIsShown} id_sez={id_sez} id_uzi={id}/>
      </div>
      <ShowList id_sez={id_sez} lists={lists} showAddItem={showAddItem} setShowAddItem={setShowAddItem} id_uzi={id}/>
      {admin && <AdminPanel />}
    </>
  );
};

export default MainPage;
