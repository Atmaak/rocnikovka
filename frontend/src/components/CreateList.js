import React from "react";

const CreateList = ({ id_uzi }) => {
  const createList = async (id_uzi) => {
    await fetch("http://localhost:3001/list/createList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
                "id_uzi": ${id_uzi}
            }`,
    });
  };

  return (
    <button
      onClick={() => {
        createList(id_uzi);
      }}
    >
      Create List
    </button>
  );
};

export default CreateList;
