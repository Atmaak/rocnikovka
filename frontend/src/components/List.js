import React from "react";
const List = ({ lists, showList, setId_Sez, setShowAddItem, showAddItem, sezIsShown, id_sez }) => {
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
  return (
    <>
      {lists.map((list) => (
        <div key={list.id_sez} className="List">
          <h4>{(list.nazev)[0].toUpperCase() + (list.nazev).slice(1)}</h4>
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
