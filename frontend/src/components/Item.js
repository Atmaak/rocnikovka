import React from "react";
import { FcCheckmark } from 'react-icons/fc'
import { ImCross } from 'react-icons/im'
const Item = ({ items }) => {
    var keyCount = 0
  return (
    <>
      {items.map((item) => (
        <div key={keyCount++} id={item.stav}>
          <h2>{item.nazev}</h2>
          <p>Počet: {item.kusy}</p>
          <span className='stav'>{(item.stav == 'nekoupeno') ? <FcCheckmark />: <ImCross /> }</span>
          {console.log(item.stav)}
        </div>
      ))}
    </>
  );
};
export default Item;
