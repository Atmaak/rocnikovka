import React, {useState} from 'react'
import ShowProfile from './profile/ShowProfile'
const Header = ({ title, id_uzi, showIt }) => {
const [showProfile, setShowProfile] = useState(false)

    return (
        <header>
            <h1>{title}</h1>
            {showIt && <div><button onClick={() => {setShowProfile(!showProfile)}} className="buttonos">Profile</button></div>}
            {showProfile && <ShowProfile id_uzi={id_uzi} />}
            
        </header>
    )
}

export default Header
