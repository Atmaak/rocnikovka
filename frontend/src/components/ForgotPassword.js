import React,{ useRef } from 'react'

const ForgotPassword = () => {
    const email = useRef()

    const forgotPassword = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/user/newPassword", {
          method: 'POST',
          headers: { 'Content-Type': 'application/'},
          body: JSON.stringify({email: email})
        })
      }
    return (
        <div>
            <form onSubmit={(e) => {forgotPassword(e)}}>
                <input type="email" ref="email" placeholder="email"/>
            </form>
        </div>
    )
}

export default ForgotPassword
