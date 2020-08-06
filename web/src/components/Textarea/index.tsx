import React from 'react';
import ITextareaProps from './ITextareaProps';

import  './styles.css';

const Textarea: React.FC<ITextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;