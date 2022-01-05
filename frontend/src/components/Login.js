import React, { useRef } from 'react';
import ForgotPassword from './ForgotPassword';
const Login = ({ onSubmit, onClickShowRegister }) => {
  var refUsername = useRef();
  var refPassword = useRef();
  
  return (
    <>
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <input type="text" placeholder="Username" ref={refUsername} />
        </div>
        <div>
          <input type="password" placeholder="Password" ref={refPassword} />
        </div>
        <div>
          <input type='submit' onClick={async () => await onSubmit(refUsername.current.value, refPassword.current.value)} />
        </div>
      </form>
      <p>Forgot your username or password? <span onClick={async () => await onClick(refUsername.current)}></span></p>
      <p>Not registered? <span onClick={() => {onClickShowRegister(true)}} className='link'>Click here</span></p>
    </div>
    </>
  );
};

export default Login;
