import React, { useRef } from "react";
import { CgCloseR } from "react-icons/cg";

const SetPrice = ({doIt, setshowSetAsCompleted}) => {
  const price = useRef();

  const close = (e) => {
    if (e.target.classList[0] === "popup") setshowSetAsCompleted(false);
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
            setshowSetAsCompleted(false);
          }}
        >
          <CgCloseR />
        </span>
        <div className="form">
          <h1>Set price and mark as completed</h1>
          <form
            onSubmit={(e) => {
              doIt(e, price);
            }}
          >
            <input type="number" min="1" ref={price}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetPrice;