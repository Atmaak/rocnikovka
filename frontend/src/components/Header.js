import React, { useState, useEffect } from "react";
import ShowProfile from "./profile/ShowProfile";
import { ImProfile, ImPlus } from "react-icons/im";
import { MdFamilyRestroom } from "react-icons/md"
const Header = ({ title, id_uzi, setShowCreateList, setShowAddToFamily }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [admin, setAdmin] = useState(false)
  const checkIfAdmin = async (id_uzi) => {
    const res = await fetch('http://localhost:3001/user/isAdminOfFamily', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        id_uzi: id_uzi
    })
    })
    const data = await res.json();
    setAdmin(data)
  }

  useEffect(() => {
    checkIfAdmin(id_uzi)
  })

  return (
    <>
      <div className="mainHeader">
        <h1>{title}</h1>
        <div className="icons">
          
        {admin && <MdFamilyRestroom onClick={() => {setShowAddToFamily(true)}} size="5vh"/>}
            <ImPlus
              onClick={() => {
                setShowCreateList(true);
              }}
              size="5vh"
            />
            {
              <ImProfile
                onClick={() => {
                  setShowProfile(!showProfile);
                }}
                 size="5vh"
              />
            }
        </div>
      </div>
      {showProfile && (
        <ShowProfile id_uzi={id_uzi} setShowProfile={setShowProfile} />
      )}
    </>
  );
};
/*onClick={()=> {setShowCreateList(true)}}*/
export default Header;
