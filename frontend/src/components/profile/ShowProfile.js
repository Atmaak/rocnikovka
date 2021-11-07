import React, { useEffect, useState, useRef } from "react";

const ShowProfile = ({ id_uzi }) => {
  const [data, setData] = useState([]);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordSameRef = useRef();

  useEffect(() => {
    setData(getProfile(id_uzi));
  }, [id_uzi]);

  const changeUsername = () => {
    /*if(data.jmeno === usernameRef.current.value) return
    if((usernameRef.current.value).length < 3) return

    console.log(id_uzi, usernameRef.current.value)
    fetch('http://localhost:3001/user/changeUsername',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: `{
          "id_uzi": ${id_uzi},
          "username" : ${usernameRef.current.value}  
        }`
    })*/

  }
  const changeMail = () => {/*
      if(data.email === emailRef.current.value) return
      if(!validateEmail(emailRef.current.value)) return*/

  }
  

  
  return (
    <div>
        <h1>{data.jmeno}</h1>
      <div>
        <p>Change Username</p>
        <p></p>
        <input type="text" placeholder={data.jmeno} ref={usernameRef} /> 
        <button onClick={changeUsername}>Change</button> 
        <sub>Min. Length is 3 characters</sub>
      </div>
      <div>
        <p>Change Email</p>
        <input type="email" placeholder={data.email} ref={emailRef} />
        <button onClick={changeMail}>Change</button>
      </div>
      <div>
        <p>Change Password</p>
        <p>New password</p>
        <input type="text" ref={passwordRef} />
        <p>New password Again</p>
        <input type="text" ref={passwordSameRef} />
        <button>Change</button>
      </div>
    </div>
  );
};

const getProfile = async (id_uzi) => {
  const res = await fetch("http://localhost:3001/user/getData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `{"id_uzi": ${id_uzi}}`,
  });
  const data = await res.json();
  return data;
};


const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



export default ShowProfile;
