import React from 'react'
import './UserInput.css'

const UserInput = (prop) => {
    return (
        <div className = 'UserInput'>
            <input type = 'text' onChange = {prop.changed} value = {prop.name}/>
        </div>
    )
}

export default UserInput;