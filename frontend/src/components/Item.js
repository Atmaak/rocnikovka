import React from "react";
import { ImCross, ImCheckmark } from 'react-icons/im'
import { BsFillTrashFill } from 'react-icons/bs'

const Item = ({ items }) => {
    var keyCount = 0

    const deleteItem = async (id_pol) => {
      await fetch("http://localhost:3001/item/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{"id_pol": ${id_pol}}`,
      });
    }

    const changeState = (state) => {
      console.log(state)
    }
  return (
    <>
      {items.map((item) => (
        <div key={keyCount++} id={item.stav}>
          <div className="infoItem">
            <p>{(item.nazev).toUpperCase()} : {item.kusy}</p>
            <div>
              <p><span className='stav'>{((item.stav === 'koupeno') ? <ImCheckmark onClick={() => {changeState(item.stav)}}/>: <ImCross onClick={() => {console.log(item)} }/> )}</span> <button onClick={async () => {await deleteItem(item.id_pol)}}><BsFillTrashFill /></button></p>
            </div>
            
          </div>
          
        </div>
      ))}
    </>
  );
};
export default Item;