import React from 'react';

const HeaderMainPage = ({ setShowLogin, setShowRegister }) => {
  return<>
  <div className="mainHeader">
      <h1>Shopping List</h1>
      <div className="icons link">
          <p onClick={() => {setShowLogin(true)}}>Log In</p>
          <p onClick={() => {setShowRegister(true)}}>Sign Up</p>
      </div>
  </div>
      
  </>
};

export default HeaderMainPage;
