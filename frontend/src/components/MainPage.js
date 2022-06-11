import React, { useState, useEffect, useRef } from "react";

import List from "./list/List";
import ShowList from "./ShowList";
import CreateList from "./list/CreateList";
import AddToFamily from "./mainpage/AddToFamily";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import AdminPanel from "./admin/AdminPanel";
import Statistika from "./profile/Statistika"

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
  //const [options, setOptions] = useState();
  const [options2, setOptions2] = useState();
  const [shown, setShown] = useState("");
  const [mark, setMark] = useState(0);
  const [xd, setXD] = useState(false);
  const [refresh, setRefresh] = useState(0);

  //const drop = useRef();
  const drop2 = useRef();

  /* useEffect(() => {
    if (drop.current.state.selected.value === "-") return setShown("*");
    setShown(drop.current.state.selected.value);
  }, [xd]); */

  useEffect(() => {
    setShown("*")
    
    /* var xd = []; */
    var xd2 = [];
    /* const fillOptions = async () => {
      const res = await fetch("http://localhost:3001/item/types");
      const data = await res.json();
      for (let i = 0; i < data.length; i++) {
        xd[i] = { value: data[i].nazev, id_szn: data[i].id_szn };
      }
    };
    fillOptions();
    xd.sort(); 
    setOptions(xd);*/

    const fillOptions2 = async () => {
      const res = await fetch("http://localhost:3001/type/getShops");
      const data = await res.json();
      for (let i = 0; i < data.length; i++) {
        if(data[i].id_mark !== 0) xd2[i] = { value: data[i].nazev + " - " + data[i].mesto, id_mark: data[i].id_mark };
        
      }
      setOptions2(xd2);
    }

    fillOptions2()


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
    setXD(!xd);
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
      if(listsFromServer.length === lists.length) return
      await setLists(listsFromServer);
    };
    getLists();
  }, [refresh, id]);

  const showListos = (id) => {
    let id_mark = 0
    for (let i = 1; i < options2.length; i++) {
      if((options2[i].value) == (drop2.current.state.selected.value))
      {
       id_mark = options2[i].id_mark
      }
    }
    if (id === id_sez) {
      setId_Sez(0);
      return setSezIsShown(!sezIsShown);
    }
    setSezIsShown(true);
    setRefresh(refresh+1);
    setMark(id_mark);
    setId_Sez(id);
  };
  const showListosRefresh = (id) => {
    let id_mark = 0
    for (let i = 1; i < options2.length; i++) {
      if((options2[i].value) == (drop2.current.state.selected.value))
      {
       id_mark = options2[i].id_mark
      }
    }
    setSezIsShown(true);
    setRefresh(refresh+1);
    setMark(id_mark);
    setId_Sez(id);
  };
  return (
    <>
      {showAddToFamily && (
        <AddToFamily setShowAddToFamily={setShowAddToFamily} id_uzi={id} />
      )}
      {showCreateList && (
        <CreateList id_uzi={id} setShowCreateList={setShowCreateList} setRefresh={setRefresh} refresh={refresh} />
      )}

      <div className="dropdown">
        {/* <Dropdown
          options={options}
          placeholder="Select type of list"
          ref={drop}
          onChange={() => {
            setXD(!xd);
          }}
        /> */}
        <Dropdown
          options={options2}
          placeholder="Select shop"
          ref={drop2}
          onChange={() => {
            setXD(!xd);
            setRefresh(refresh+1)
            showListosRefresh(id_sez)
          }}
        />
      </div>
      <div className="row">
        <List
          lists={lists}
          showList={showListos}
          setId_Sez={setId_Sez}
          setShowAddItem={setShowAddItem}
          showAddItem={showAddItem}
          sezIsShown={sezIsShown}
          id_sez={id_sez}
          id_uzi={id}
          shown={shown}
          setRefresh={setRefresh}
          refresh={refresh}
        />
        </div>
      <ShowList
        id_sez={id_sez}
        mark={mark}
        lists={lists}
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        setRefresh={setRefresh}
        refresh={refresh}
      />
      <Statistika id_uzi={id} />
      {admin && <AdminPanel />}
    </>
  );
};

export default MainPage;
