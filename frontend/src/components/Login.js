import React, { useRef } from 'react';

const Login = ({ onSubmit }) => {
  var refUsername = useRef();
  var refPassword = useRef();
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <label>Username</label>
        <input type="text" placeholder="username" ref={refUsername} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="password" ref={refPassword} />
      </div>
      <div>
        <input type='submit' onClick={() => onSubmit(refUsername.current.value, refPassword.current.value)} />
      </div>
    </form>
  );
};

export default Login;
