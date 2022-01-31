import fetch from "node-fetch";
import React, { useRef, useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
const AddItem = ({ id_sez, setShowAddItem }) => {
  const [data, setData] = useState([]);
  const [id_szn, setIdszn] = useState(0);
  const [err, setErr] = useState("");
  const [showTypes, setShowTypes] = useState(false);
  var nazev = useRef("");
  var kusy = useRef("");

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (nazev.current.value !== "" && kusy.current.value !== "")
      setShowTypes(true);
    if (nazev.current.value === "" || kusy.current.value === "")
      setShowTypes(false);
  }, [nazev.current.value, kusy.current.value]);

  const fetchdata = async () => {
    const res = await fetch("http://localhost:3001/item/types");
    const dat = await res.json();
    setData(dat);
  };
  const addIt = () => {
    fetch("http://localhost:3001/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
                "item": "${nazev.current.value}",
                "id_sta": 2,
                "id_sez": ${id_sez},
                "kusy": ${kusy.current.value},
                "id_szn": ${id_szn}
            }`,
    });
  };
  const doIt = (e) => {
    e.preventDefault();
    if (nazev.current.value.length < 3) return setErr("Too short name!");
    if (id_sez === 0) return setErr("You need to choose type of item!");
    addIt(nazev.current.value, kusy.current.value, id_sez);
    nazev.current.value = null;
    kusy.current.value = null;
    setIdszn(0);
    setErr("");
  };
  const close = (e) => {
    if (e.target.classList[0] === "popup") setShowAddItem(false);
  };
  return (
    <div
      className="popup"
      onClick={(e) => {
        close(e);
      }}
    >
      <div className="popup_inner">
        <span
          className="close"
          onClick={(e) => {
            setShowAddItem(false);
          }}
        >
          <CgCloseR />
        </span>
        <div className="form">
          {id_sez > 0 && (
            <>
              <h1>Add Item</h1>
              <form
                onSubmit={(e) => {
                  doIt(e);
                }}
              >
                <input type="text" placeholder="Name" ref={nazev} />
                <br />
                <input type="number" ref={kusy} placeholder="Count" min="1" />
                <br />
                {showTypes && (
                  <>
                    <div className="types">
                      {data.map((item) => {
                        return (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setIdszn(item.id_szn);
                            }}
                            key={item.id_szn}
                          >
                            {item.nazev[0].toUpperCase() + item.nazev.slice(1)}
                          </button>
                        );
                      })}
                    </div>
                    <br />
                  </>
                )}

                <input type="submit" />
              </form>
              {err && (
                <>
                  <p className="err">{err}</p> <br />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddItem;
