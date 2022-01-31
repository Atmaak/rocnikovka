import React, { useEffect, useState, useRef } from "react";
import { CgCloseR } from "react-icons/cg";
const ShowProfile = ({ id_uzi, setShowProfile }) => {
  const [data, setData] = useState([]);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordSameRef = useRef();

  const getProfile = async (id_uzi) => {
    const res = await fetch("http://localhost:3001/user/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_uzi": ${id_uzi}}`,
    });
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    if (!data) getProfile(id_uzi);
  });
  const changeUsername = (e) => {
    e.preventDefault();
    if (data.jmeno === usernameRef.current.value) return;
    if (usernameRef.current.value.length < 3) return;

    fetch("http://localhost:3001/user/changeUsername", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
      "id_uzi": ${id_uzi},
      "username": "${usernameRef.current.value}"
    }`,
    });
    usernameRef.current.value = null;
  };
  const changeEmail = (e) => {
    e.preventDefault();
    if (data.email === emailRef.current.value) return;
    if (!validateEmail(emailRef.current.value)) return;

    fetch("http://localhost:3001/user/changeEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
      "id_uzi": ${id_uzi},
      "email": "${emailRef.current.value}"
    }`,
    });

    emailRef.current.value = null;
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 6) return;
    if (passwordRef.current.value !== passwordSameRef.current.value) return;

    fetch("http://localhost:3001/user/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
      "id_uzi": ${id_uzi},
      "password": "${passwordRef.current.value}"
    }`,
    });

    passwordRef.current.value = null;
    passwordSameRef.current.value = null;
  };

  const deleteAccount = () => {
    fetch("http://localhost:3001/user/deleteAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_uzi": ${id_uzi}}`,
    });

    window.location.reload();
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };


  const close = (e) => {
    if((e.target).classList[0] === 'popup') setShowProfile(false)
   
  }
  return (
    <div className="popup" onClick={(e)=> {close(e)}}>
      <div className="popup_inner">
        <div className="changeIt">
          <span
            className="close"
            onClick={() => {
              setShowProfile(false);
            }}
          >
            <CgCloseR />
          </span>
          <div>
            <h5>Change Username: </h5>
            <form
              onSubmit={(e) => {
                changeUsername(e);
              }}
            >
              <input type="text" placeholder="Username" ref={usernameRef} />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div>
            <h5>Change Email: </h5>
            <form onSubmit={(e) => changeEmail(e)}>
              <input type="email" placeholder="Email" ref={emailRef} />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div>
            <h5>Change Password: </h5>
            <form
              onSubmit={(e) => {
                changePassword(e);
              }}
            >
              <input type="text" ref={passwordRef} placeholder="New Password" />
              <br />
              <input
                type="text"
                ref={passwordSameRef}
                placeholder="New password Again"
              />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <button onClick={() => deleteAccount(id_uzi)} className="buttonos">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ShowProfile;
