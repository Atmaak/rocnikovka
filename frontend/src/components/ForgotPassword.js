import React,{ useRef, useState} from 'react'

const ForgotPassword = () => {
    const email = useRef()
    const [err, setErr] = useState()
    const forgotPassword = (e) => {
        e.preventDefault()
        console.log(email.current.value)
        if(email.current.value === '') return setErr('No email address provided')
        fetch("http://localhost:3001/user/newPassword", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: `${email.current.value}`})
          })
          window.location.reload();
      }
    return (
        <div>
            <form onSubmit={(e) => {forgotPassword(e)}}>
                <input type="email" ref={email} placeholder="Email"/>
                <br />
                <input type="submit" />
            </form>
            <p className="err">{err}</p>
        </div>
    )
}

export default ForgotPassword
