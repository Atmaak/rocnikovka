import React, { useRef } from 'react';

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
      <p>Not registered? <span onClick={() => {onClickShowRegister(true)}} className='link'>Click here</span></p>
    </div>
    </>
  );
};

export default Login;
