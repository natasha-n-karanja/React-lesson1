import { useState } from "react";
import React from 'react';
import './ProfileComponent.css';
import ProfileData from "../Data/Profile.json"


const ProfileComponent = () => {
  const [team,setTeam] = useState([])

  React.useEffect(() => {
    setTeam(ProfileData)
  }, [])

    return (
       <div>
            <h1>Meet The Team</h1> 
            {team?.team_members?.map((val, key) => {

             return(
              <div key ={key}>
                <h1>{val.name}</h1>
              </div>
             )
            })}
        </div>
    )

  }
export default ProfileComponent