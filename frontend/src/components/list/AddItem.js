import fetch from "node-fetch";
import React, { useRef, useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AddItem = ({ id_sez, setShowAddItem, setRefresh, refresh }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  var nazev = useRef("");
  var kusy = useRef("");

  const [options, setOptions] = useState();
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
  }, []);

  const drop = useRef();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await fetch("http://localhost:3001/item/types");
    const dat = await res.json();
    setData(dat);
  };
  const addIt = async (XD) => {
    await fetch("http://localhost:3001/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
                "item": "${nazev.current.value}",
                "id_sta": 2,
                "id_sez": ${id_sez},
                "kusy": ${kusy.current.value},
                "id_szn": ${XD}
            }`,
    });
    await setRefresh(refresh+1);
    setShowAddItem(false);
  };
  const doIt = async (e) => {
    e.preventDefault();
    if (nazev.current.value.length < 3) return setErr("Too short name!");
    if (id_sez === 0) return setErr("You need to choose type of item!");
    if (!drop.current.state.selected.value) return setErr("Set type of item!");
    for (let i = 0; i < options.length; i++) {
      if (
        String(options[i].value) === String(drop.current.state.selected.value)
      ) {
        addIt(options[i].id_szn);
        nazev.current.value = null;
        kusy.current.value = null;
        await setRefresh(refresh+1)
        return setErr("");
      }
      setErr("Something went wrong");
    }
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
                <Dropdown
                  options={options}
                  placeholder="Select an option"
                  ref={drop}
                />

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
