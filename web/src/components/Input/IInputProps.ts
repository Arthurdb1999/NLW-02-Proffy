import { InputHTMLAttributes } from 'react'

export default interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}