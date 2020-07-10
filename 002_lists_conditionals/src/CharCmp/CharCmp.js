import React from 'react'
import './CharCmp.css'

const CharCmp = (prop) => {
    return (
        <div className = 'CharCmp'>
            <p onClick = {prop.click}>{prop.chara}</p>
        </div>
    );
}

export default CharCmp;