import React from 'react'
import './UserOutput.css'

const UserOutput = (prop) => {
    return (
        <div className = 'UserOutput'>
            <p>Username : {prop.username}</p>
            <p>Password : {prop.password}</p>
        </div>
    )
}

export default UserOutput;