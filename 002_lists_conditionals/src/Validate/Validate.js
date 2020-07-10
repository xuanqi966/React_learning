import React from 'react'

const Validate = (prop) => {
    let validationMessage = '';
    if (prop.length < 5) {
        validationMessage = 'Entry should be longer than 5 characters';
    } else if (prop.length > 10) {
        validationMessage = 'Entry should be shorter than 10 characters';
    }
    
    return (
        <div className = 'Validate'>
            {validationMessage}
        </div>
    );
}

export default Validate;