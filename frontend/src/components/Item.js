import React from "react";

const Item = ({ items }) => {
    var keyCount = 0
  return (
    <>
      {items.map((item) => (
        <div key={keyCount++}>
          <h2>{item.nazev}</h2>
          <p>Počet: {item.kusy}</p>
        </div>
      ))}
    </>
  );
};
export default Item;
