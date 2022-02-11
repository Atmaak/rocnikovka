import fetch from "node-fetch";
import React, { useRef } from "react";
import { CgCloseR } from "react-icons/cg";
const AddToFamily = ({setShowAddToFamily, id_uzi}) => {
    const email = useRef()
  const close = (e) => {
    if (e.target.classList[0] === "popup") setShowAddToFamily(false);
  };

  const doIt = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/inviteFamily', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        id_uzi: id_uzi,
        email: email.current.value
    })
    })
  }
  return <div
  className="popup"
  onClick={(e) => {
    close(e);
  }}
>
  <div className="popup_inner">
    <span
      className="close"
      onClick={(e) => {
        setShowAddToFamily(false);
      }}
    >
      <CgCloseR />
    </span>
    <div className="form">
        <>
          <h1>Add to Family</h1>
          <form onSubmit={(e) => doIt(e)}>
              <input type="email" placeholder="Type Email of your family member." ref={email}/>
              <input type="submit" />
          </form>
        </>
    </div>
  </div>
</div>;
}

export default AddToFamily;
