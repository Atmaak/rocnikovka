import React, { useState } from "react";
import SetPrice from "./SetPrice";
import AddTypeToList from "./AddTypeToList";
const List = ({
  lists,
  showList,
  setId_Sez,
  setShowAddItem,
  showAddItem,
  sezIsShown,
  id_sez,
  id_uzi,
  shown
}) => {
  const [showSetAsCompleted, setshowSetAsCompleted] = useState(false);
  const [err, setErr] = useState("");
  const [showAddType, setShowAddType] = useState(false);
  const getTime = (string) => {
    let time = string.substring(11, 16);
    return time;
  };
  const getDate = (string) => {
    let date = string.substring(0, 10);
    return date;
  };

  const deleteList = async (id_sez) => {
    await fetch("http://localhost:3001/list/deleteList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_sez": ${id_sez}}`,
    });
  };
  let isOwned = false;
  const setIsOwned = (state) => {
    isOwned = state;
  };

  const setPrice = (e, price) => {
    e.preventDefault();
    if (price.current.value === "") return setErr("No price typed in!");
    fetch("http://localhost:3001/list/setPrice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
          "price": ${price.current.value},
          "id_sez": ${id_sez}
      }`,
    });
    setErr("");
    setshowSetAsCompleted(false);
  };

  const setType = (e, type) => {
    e.preventDefault();
    if (type.current.state.selected.value === "")
      return setErr("Nothing selected");
    fetch("http://localhost:3001/list/setType", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
        "id_sez": ${id_sez},
        "type":"${type.current.state.selected.value}"
      }`,
    });

    setShowAddType(false);
  };

  

  return (
    <>
      {lists.map((list) => (
        <div key={list.id_sez} className="List">
          {(shown === list.typ || shown === "*") &&
            <div   >
              {setIsOwned(false)}
              {parseInt(list.id_uzi) === parseInt(id_uzi) && setIsOwned(true)}
              <h4>
                {list.nazev[0].toUpperCase() + list.nazev.slice(1)}{" "}
                {list.cena > 0 && (
                  <span style={{ color: "#85bb65" }}>{list.cena} kč</span>
                )}
              </h4>
              {!isOwned && (
                <h6 style={{ color: "red" }}>
                  Owned by {list.jmeno[0].toUpperCase() + list.jmeno.slice(1)}
                </h6>
              )}
              {isOwned && <h6 style={{ color: "green" }}>Owned by you</h6>}
              {list.typ != "*" && <h6>{list.typ}</h6>}
              <h4>
                {getTime(list.datum)} <br /> {getDate(list.datum)}
              </h4>
              <div>
                <button
                  onClick={() => {
                    showList(id_sez);
                  }}
                  className="buttonos"
                >
                  Show
                </button>
                <br />

                <button
                  className="buttonos"
                  onClick={async () => {
                    await deleteList(list.id_sez);
                    setId_Sez(0);
                  }}
                >
                  Delete List
                </button>

                {list.cena == 0 && sezIsShown && list.id_sez === id_sez && (
                  <button
                    className="buttonos"
                    onClick={async () => {
                      setshowSetAsCompleted(!showSetAsCompleted);
                    }}
                  >
                    Mark as completed
                  </button>
                )}
                {showSetAsCompleted && (
                  <SetPrice
                    doIt={setPrice}
                    setshowSetAsCompleted={setshowSetAsCompleted}
                    err={err}
                  />
                )}
                {sezIsShown && list.id_sez === id_sez && list.cena == 0 && (
                  <button
                    className="buttonos"
                    onClick={() => {
                      setShowAddItem(!showAddItem);
                    }}
                  >
                    Add Item
                  </button>
                )}
                {list.cena > 0 && (
                  <button
                    className="buttonos"
                    onClick={() => {
                      setShowAddType(!showAddType);
                    }}
                  >
                    Add type
                  </button>
                )}
                {list.cena > 0 && showAddType && (
                  <AddTypeToList
                    doIt={setType}
                    setShowIt={setShowAddType}
                    err={err}
                  />
                )}
                <br />
              </div>
            </div>
          }
      </div>))}
    </>
  );
};
export default List;
