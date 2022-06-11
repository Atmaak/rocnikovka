import React, { useState } from "react";
import { ImCross, ImCheckmark } from 'react-icons/im'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import EditItem from "./EditItem";

const Item = ({ items, setRefresh, refresh }) => {
  const [edit, setEdit] = useState([false])
  const [shownEdit, setShownEdit] = useState([0])
    const deleteItem = async (id_pol) => {
      await fetch("http://localhost:3001/item/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{"id_pol": ${id_pol}}`,
      });
    }

    const changeState = async (item) => {
      if(item.id_sta === 1){
       await fetch("http://localhost:3001/item/changeState", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{
          "id_pol": ${item.id_pol},
          "id_sta": 2
        }`,
      });
      }
      if(item.id_sta === 2){
       await fetch("http://localhost:3001/item/changeState", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{
          "id_pol": ${item.id_pol},
          "id_sta": 1
        }`,
      });
      }
      await setRefresh(refresh+1)
    }
    const showEdits = (item) => {
      if(item.id_pol === shownEdit){
        setEdit(!edit);
      }
      else {
        setShownEdit(item.id_pol)
      }
    }
  return (
    <>
      {items.map((item) => (
        <div key={item.id_pol} className={item.stav}>
          <div className="item">
          <div className="headerItem">
            <h1>{(item.nazev)[0].toUpperCase() + (item.nazev).slice(1)} </h1>
          </div>
          <div className="bodyItem">
            <p>Počet: {item.kusy}</p>
            <p>Oddělení: {(item.nazevSerazeni)[0].toUpperCase() + (item.nazevSerazeni).slice(1)}</p>
          </div>
          <div className="footerItem"> 
          <span className="btns">{((item.id_sta === 1) ? <ImCheckmark onClick={() => {changeState(item)}}/>: <ImCross onClick={() => {changeState(item)}}/> )} <button onClick={async () => {await deleteItem(item.id_pol)}}><BsFillTrashFill /></button> <button onClick={() => { showEdits(item)} } ><BsFillPencilFill /></button></span>
         <div className="editItem">{edit && shownEdit === item.id_pol && <EditItem item={item}/>}</div> 
          </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Item;