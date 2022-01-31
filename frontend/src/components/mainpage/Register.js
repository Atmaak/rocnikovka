import React, { useRef, useState } from "react";

import { CgCloseR } from "react-icons/cg";
const Register = ({ registered, setShowRegister }) => {
  var username = useRef("");
  var email = useRef("");
  var password = useRef("");
  var passAgain = useRef("");
  const [err, setErr] = useState();

  const onRegister = async (e) => {
    e.preventDefault();
    if (
      username.current.value === "" ||
      email.current.value === "" ||
      password.current.value === "" ||
      passAgain.current.value === ""
    )
      return setErr("You need to type something in!");
    if (username.current.value === "")
      return setErr("You need to put your username in!");
    if (email.current.value === "")
      return setErr("You need to put your email in!");
    if (password.current.value === "" || passAgain.current.value === "")
      return setErr("You need to put your password in!");
    if (password.current.value !== passAgain.current.value) {
      password.current.value = null;
      passAgain.current.value = null;

      return setErr("Passwords are not matching");
    }
    if (!validateEmail(email.current.value))
      return setErr("Email address not valid!");

    const res = await fetch("http://localhost:3001/user/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"username": "${username.current.value}", "password": "${password.current.value}", "email": "${email.current.value}"}`,
    });
    const data = await res.json();
    if (data.created) {
      registered();
    }
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const close = (e) => {
    if (e.target.classList[0] === "popup") setShowRegister(false);
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
          onClick={() => {
            setShowRegister(false);
          }}
        >
          <CgCloseR />
        </span>
        <br />
        <h1>Register</h1>
        <div className="form">
          <form>
            <input type="text" ref={username} placeholder="Username" />
            <br />
            <input type="email" ref={email} placeholder="Email" />
            <br />
            <input type="password" ref={password} placeholder="Password" />
            <br />
            <input
              type="password"
              ref={passAgain}
              placeholder="Password again "
            />
            <br />
            <input
              type="submit"
              onClick={(e) => {
                onRegister(e);
              }}
            />
            <br />
            <button
              className="buttonos"
              onClick={(e) => {
                e.preventDefault();
                setShowRegister(false);
              }}
            >
              Back
            </button>
            <br />
            <p className="err">{err}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
