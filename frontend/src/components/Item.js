import React from "react";
import { ImCross, ImCheckmark } from 'react-icons/im'
import { BsFillTrashFill } from 'react-icons/bs'

const Item = ({ items }) => {
    const deleteItem = async (id_pol) => {
      await fetch("http://localhost:3001/item/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{"id_pol": ${id_pol}}`,
      });
    }

    const changeState = (item) => {
      if(item.id_sta === 1){
        fetch("172.105.71.33:3001/item/changeState", {
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
        fetch("172.105.71.33:3001/item/changeState", {
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
    }
  return (
    <>
      {items.map((item) => (
        <div key={item.id_pol} className={item.stav}>
          <div className="infoItem">
            <p>{(item.nazev).toUpperCase()} : {item.kusy}</p>
            <div>
              <p>{((item.stav === 'koupeno') ? <ImCheckmark onClick={() => {changeState(item)}}/>: <ImCross onClick={() => {changeState(item)}}/> )} <button onClick={async () => {await deleteItem(item.id_pol)}}><BsFillTrashFill /></button></p>
            </div>
          </div>
          
        </div>
      ))}
    </>
  );
};
export default Item;