import React, {useRef, useState} from 'react'

const Register = ( { registered } ) => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passAgain = useRef()

    const [err, setErr] = useState()
    
    const onRegister = async (e) => {
        e.preventDefault()
        if(username.current.value === '' || email.current.value === '' || password.current.value === '' || passAgain.current.value === '')return setErr('You need to type something in')
        if(username.current.value === '') return setErr('You need to put your username in')
        if(email.current.value === '') return setErr('You need to put your email in')
        if(password.current.value === '' || passAgain.current.value === '') return setErr('You need to put your password in')
        if(password.current.value !== passAgain.current.value){
            password.current.value = null
            passAgain.current.value = null

            setErr('Passwords are not matching')
        } 

        console.log(password.current.value, passAgain.current.value)
          
            const res = await fetch('172.105.71.33:3001/user/reg', {
              method:"POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: `{"username": "${username.current.value}", "password": "${password.current.value}", "email": "${email.current.value}"}`
            })
            const data = await res.json()
           if(data.created){
            registered()
           }
        
    }


    return (
        <form>   
            <input type="text" ref={username} placeholder="Username"/>
            <br />
            <input type="email" ref={email} placeholder="Email"/>
            <br />
            <input type="password" ref={password} placeholder="Password"/>
            <br />
            <input type="password" ref={passAgain} placeholder="Password again "/>
            <br />
            <input type="submit" onClick={(e) => {onRegister(e)}}/>
            <br />
            <button className="buttonos" onClick={() =>window.location.reload()}>Back</button>
            <br />
            <p className='err'>{err}</p>
        </form>
    )
}

export default Register
