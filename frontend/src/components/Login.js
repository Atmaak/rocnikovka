import React, { useRef, useState } from 'react';
import ForgotPassword from './ForgotPassword';
const Login = ({ onSubmit, onClickShowRegister }) => {
  var refUsername = useRef();
  var refPassword = useRef();
  const [showLogin, setShowLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const changeIt = () => {
    setShowLogin(false); 
    setShowForgot(true)
  }
  return (
    <>
    {showLogin && <div>
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
      <span onClick={() => { /*changeIt()*/ alert('Not implemented yet')}} className="link"><p>Forgot your username or password?</p> </span>
      <span onClick={() => {onClickShowRegister(true)}} className='link'><p>Not registered?</p></span>
    </div>}
    {showForgot && <ForgotPassword />}
    </>
  );
};

export default Login;
