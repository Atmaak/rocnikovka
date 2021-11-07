import React, { useEffect, useState, useRef } from "react";

const ShowProfile = ({ id_uzi }) => {
  const [data, setData] = useState([]);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordSameRef = useRef();

  useEffect(async () => {
    await setData(await getProfile(id_uzi));
  }, [data]);

  const changeUsername = (e) => {
    e.preventDefault()
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
    e.preventDefault()
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

  return (
    <div>
      <p>{data.jmeno}</p>
      <p>{data.email}</p>
      <div>
        <p>Change Username</p>
        <form onSubmit={(e) => {changeUsername(e)}}>
        <input type="text" placeholder={data.jmeno} ref={usernameRef} />
        <input type="submit" />
        <sub>Min. Length is 3 characters</sub>
        </form>
      </div>
      <div>
        <p>Change Email</p>
        <form onSubmit={(e) => changeEmail(e)}>
          <input type="email" placeholder={data.email} ref={emailRef} />
          <input type="submit" />
        </form>
      </div>
      <div>
        <p>Change Password</p>
        <p>New password</p>
        <input type="text" ref={passwordRef} />
        <p>New password Again</p>
        <form onSubmit={(e) => {changePassword(e)}}>
          <input type="text" ref={passwordSameRef} />
          <input type="submit" />
        </form>
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
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default ShowProfile;
