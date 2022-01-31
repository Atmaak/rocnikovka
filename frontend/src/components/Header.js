import React, { useState } from "react";
import ShowProfile from "./profile/ShowProfile";
import { ImProfile, ImPlus } from "react-icons/im";
const Header = ({ title, id_uzi, setShowCreateList }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="mainHeader">
        <h1>{title}</h1>
        <div className="icons">
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
