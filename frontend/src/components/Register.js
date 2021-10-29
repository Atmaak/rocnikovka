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
          
            const res = await fetch('http://localhost:3001/user/reg', {
              method:"POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: `{"username": "${username.current.value}", "password": "${password.current.value}", "email": "${email.current.value}"}`
            })
            const data = await res.json()
            console.log(data.created)

           if(data.created){
            registered()
           }
        
    }


    return (
        <form>   
            <label >Username </label>
            <input type="text" ref={username}/>
            <br />
            <label >E-mail </label>
            <input type="email" ref={email}/>
            <br />
            <label>Password </label>
            <input type="password" ref={password}/>
            <br />
            <label>Password again </label>
            <input type="password" ref={passAgain}/>
            <br />
            <input type="submit" onClick={(e) => {onRegister(e)}}/>
            
            <p className='err'>{err}</p>
        </form>
    )
}

export default Register
