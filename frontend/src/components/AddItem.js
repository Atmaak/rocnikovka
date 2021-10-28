import React, { useRef } from "react";
import { BsTypeH1 } from "react-icons/bs";

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
        {id_sez > 0 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Název </label>
            <input type="text" placeholder="Nazev" ref={nazev} />
            <br />
            <label> Kusy </label>
            <input type="number" ref={kusy} />
            <input
              type="submit"
              onClick={async () => {
                if (
                  nazev.current.value.length >= 2 &&
                  kusy.current.value.length >= 1
                ) {
                  await addIt(nazev.current.value, kusy.current.value, id_sez);
                  nazev.current.value = null;
                  kusy.current.value = null;
                }
              }}
            />
          </form>
        )}
      </div>
    </>
  );
};

export default AddItem;
