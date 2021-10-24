import React, { useRef } from "react";

const AddItem = ({ id_sez }) => {
  var nazev = useRef();
  var kusy = useRef();

  const addIt = async () => {
    //console.log(nazev.current.value, parseInt(kusy.current.value), parseInt(id_sez))
    await fetch("http://localhost:3001/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
                "item": "${nazev.current.value}",
                "id_sta": 2,
                "id_sez": ${id_sez},
                "kusy": ${kusy.current.value}
            }`,
    });
  };

  return (
    <>
      <div className="addIt">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Nazev</label>
          <input type="text" placeholder="Nazev" ref={nazev} />
          <label>Kusy</label>
          <input type="number" ref={kusy} />
          <input
            type="submit"
            onClick={async () => {
              await addIt(nazev.current.value, kusy.current.value, id_sez);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default AddItem;
//
