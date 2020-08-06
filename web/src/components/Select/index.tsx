import React from 'react';
import ISelectProps from './ISelectProps';

import './styles.css';

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma Opção</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;