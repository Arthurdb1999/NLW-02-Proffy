import React from 'react';
import IInputProps from './IInputProps';

import  './styles.css';

const Input: React.FC<IInputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest} />
        </div>
    );
}

export default Input;