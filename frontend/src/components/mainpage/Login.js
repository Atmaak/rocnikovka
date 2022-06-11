import React, { useRef, useState } from "react";
//import ForgotPassword from "./ForgotPassword";
import { CgCloseR } from "react-icons/cg";
const Login = ({ onSubmit, onClickShowRegister, setShowLoginos }) => {
  var refUsername = useRef();
  var refPassword = useRef();
  const [showLogin, setShowLogin] = useState(true);
  //const [showForgot, setShowForgot] = useState(false);
  /* const changeIt = () => {
    setShowLogin(false);
    setShowForgot(true);
  }; */

  const close = (e) => {
    if (e.target.classList[0] === "popup") setShowLoginos(false);
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
          onClick={(e) => {
            setShowLoginos(false);
          }}
        >
          <CgCloseR />
        </span>

        {showLogin && (
          <div className="form">
            <br />
            <h1>Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Username" ref={refUsername} />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  ref={refPassword}
                />
              </div>
              <div>
                <input
                  type="submit"
                  onClick={async () =>
                    await onSubmit(
                      refUsername.current.value,
                      refPassword.current.value
                    )
                  }
                />
              </div>
              <button
                className="buttonos"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLoginos(false);
                }}
              >
                Back
              </button>
            </form>
              {/* <button
                className="buttonos"
                onClick={() => {
                  changeIt();
                }}
              >
                Forgot your username or password?
              </button> */}
              <button
                className="buttonos"
                onClick={() => {
                  onClickShowRegister(true);
                }}
              >
                Not Registered?
              </button>
          </div>
        )}
        {/* showForgot && <ForgotPassword /> */}
      </div>
    </div>
  );
};

export default Login;
