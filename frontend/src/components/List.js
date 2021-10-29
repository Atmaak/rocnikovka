import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
const List = ({ lists, funkce, setId_Sez }) => {
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
          <h4>
              {getTime(list.datum)} <br /> {getDate(list.datum)}
          </h4>
          <button
            onClick={() => {
              funkce(list.id_sez);
            }}
          >
            Show
          </button>
          <br />
          <button
            onClick={async () => {
              await deleteList(list.id_sez);
              setId_Sez(0)
            }}
          >
            <BsFillTrashFill />
          </button>
        </div>
      ))}
    </>
  );
};

export default List;
