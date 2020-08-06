import { TextareaHTMLAttributes } from 'react'

export default interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}