import React, { useRef } from "react";
import axios from "axios";

var data
module.exports = {
    data: data
}

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();


  function login() {
   // console.log(usernameRef.current.value);
   // console.log(passwordRef.current.value);


    const options = {// nastaveni pro request na login 
    method: 'POST',
    url: 'http://localhost:3001/log',
    data: {username: `${usernameRef.current.value}`, password: `${passwordRef.current.value}`}
    };

    axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data
    }).catch(function (error) {
    console.error(error);
    });

  }

  return (data, 
    <>
      <h1>Username</h1>
      <input ref={usernameRef} type="text"></input>
      <h1>Password</h1>
      <input ref={passwordRef} type="password"></input>
      <button onClick={login}>Click</button>
    </>
  );
}
