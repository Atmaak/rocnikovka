import React, {useState} from 'react'
import ShowProfile from './profile/ShowProfile'
import {ImProfile} from 'react-icons/im'
const Header = ({ title, id_uzi, showIt }) => {
const [showProfile, setShowProfile] = useState(false)

    return (
        <>
        <div className="mainHeader">
            <h1>{title}</h1>
            <p>{showIt && <ImProfile onClick={() => {setShowProfile(!showProfile)}} size="5vh"/>}</p>
        </div>
        {showProfile && <ShowProfile id_uzi={id_uzi} setShowProfile={setShowProfile}/>}
            
        </>
    )
}
/*{showIt && <ImProfile onClick={() => {setShowProfile(!showProfile)}} size="5vh"/>}*/
export default Header
