import React from "react";
const List = ({ lists, showList, setId_Sez, setShowAddItem, showAddItem, sezIsShown, id_sez, id_uzi }) => {
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
    isOwned = state
  }
  return (
    <>
      {lists.map((list) => (
        <div key={list.id_sez} className="List">
          {setIsOwned(false)}
          {(parseInt(list.id_uzi) === parseInt(id_uzi)) && setIsOwned(true)}
          <h4>{(list.nazev)[0].toUpperCase() + (list.nazev).slice(1)}</h4>
          {!isOwned && <h6 style={{color: 'red'}}>Owned by {(list.jmeno)[0].toUpperCase() + (list.jmeno).slice(1)}</h6>}
          {isOwned && <h6 style={{color: 'green'}}>Owned by you</h6>}
          <h4>
            {getTime(list.datum)} <br /> {getDate(list.datum)}
          </h4>
          <div>
            <button
              onClick={() => {
                showList(list.id_sez);
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
            {sezIsShown && list.id_sez === id_sez && <button className="buttonos" onClick={() => {setShowAddItem(!showAddItem)}}>
              Add Item
            </button>}
          </div>
        </div>
      ))}
    </>
  );
};
export default List;
