import  { useRef } from 'react'
import axios from "axios";
function App() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  var user
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
     //return user = response.data.username
     login = () => {
       this.forceUpdate()
     } 
     }).catch(function (error) {
     console.error(error);
     });
     
   }

   if(!user){
    return (
      <>
        <h1>Username</h1>
        <input ref={usernameRef} type="text"></input>
        <h1>Password</h1>
        <input ref={passwordRef} type="password"></input>
        <button onClick={login}>Click</button>
      </>
    );
   }
   if(user){
     return 'negr'
   }
}

export default App;
