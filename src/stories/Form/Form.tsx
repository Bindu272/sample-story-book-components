import React, { useState } from 'react'
import './Form.css'

interface FormProps {
    onSubmit: (FormData: FormData) => void
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string
}


export const Form = ({ onSubmit }: FormProps) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    }
    return (
        <form className='storybook-form' onSubmit={handleSubmit}>
            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' className='storybook-input' />
            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' className="storybook-input" />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="storybook-input"
            />
            <button type='submit' className="storybook-button">Submit</button>
        </form>
    )
}

export default Form
