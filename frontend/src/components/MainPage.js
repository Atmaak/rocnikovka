import React, { useState, useEffect, useRef } from "react";

import List from "./list/List";
import ShowList from "./ShowList";
import CreateList from "./list/CreateList";
import AddToFamily from "./mainpage/AddToFamily";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
//import AdminPanel from "./admin/AdminPanel";

const MainPage = ({
  id,
  showCreateList,
  setShowCreateList,
  setShowAddToFamily,
  showAddToFamily,
}) => {
  const [lists, setLists] = useState([]);
  const [id_sez, setId_Sez] = useState(0);
  const [showAddItem, setShowAddItem] = useState(false);
  const [sezIsShown, setSezIsShown] = useState(false);
  const [admin, setIsAdmin] = useState(false);
  const [options, setOptions] = useState();
  const [shown, setShown] = useState("");

  const [xd, setXD] = useState(false);

  const drop = useRef();

  useEffect(() => {
    if(drop.current.state.selected.value === '') return setShown("*");
    setShown(drop.current.state.selected.value);
  }, [xd]);

  useEffect(() => {
    var xd = [];
    const fillOptions = async () => {
      const res = await fetch("http://localhost:3001/item/types");
      const data = await res.json();
      for (let i = 0; i < data.length; i++) {
        xd[i] = { value: data[i].nazev, id_szn: data[i].id_szn };
      }
    };
    fillOptions();
    xd.sort();
    setOptions(xd);
    const fetchIt = async () => {
      const res = await fetch("http://localhost:3001/user/isAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{
        "id_uzi": ${id}
      }`,
      });
      const data = await res.json();
      setIsAdmin(data);
    };

    fetchIt();
    setXD(!xd)
  }, []);

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

  const showList = (id) => {
    if (id === id_sez) {
      setId_Sez(0);
      return setSezIsShown(!sezIsShown);
    }
    setSezIsShown(true);
    setId_Sez(id);
  };
  return (
    <>
      {showAddToFamily && (
        <AddToFamily setShowAddToFamily={setShowAddToFamily} id_uzi={id} />
      )}
      {showCreateList && (
        <CreateList id_uzi={id} setShowCreateList={setShowCreateList} />
      )}
      
      <div className="dropdown"><Dropdown options={options} placeholder="Select an option" ref={drop} onChange={() => {setXD(!xd)}}/></div>
      <div className="row">
        <List
          lists={lists}
          showList={showList}
          setId_Sez={setId_Sez}
          setShowAddItem={setShowAddItem}
          showAddItem={showAddItem}
          sezIsShown={sezIsShown}
          id_sez={id_sez}
          id_uzi={id}
          shown={shown}
        />
      </div>
      <ShowList
        id_sez={id_sez}
        lists={lists}
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
      />
      {/*admin && <AdminPanel />*/}
    </>
  );
};

export default MainPage;
