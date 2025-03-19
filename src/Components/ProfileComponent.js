import { useState } from "react";
import {link} from "react-router-dom";
import React from 'react';
import './ProfileComponent.css';


const ProfileComponent = () => {
    const [team] = useState ([
        {
            name: " Natasha N Karanja",
            position: "  Deputy Lead Developer",
            description: "I'm an ambitous and passionate developer."
        }
    ])

    return (
       <div>
            <h1>Meet The Team</h1>
            <header>
                
            </header>
            </div>
    )
}

export default ProfileComponent;