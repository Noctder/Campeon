import { ErrorMessage, useField } from 'formik'
import React from 'react';
import './InputsField.css';

export default function InputsField(props:InputsFieldProps) {

    const [field, meta] = useField(props.label)

    return(
        <>
            <label className="label">{props.label}</label>
            <input
            className={`input ${meta.touched && meta.error && 'is-danger'}`}
            autoComplete="off"
            {...field}
            {...props}
            />
            <ErrorMessage
            component="div"
            name={field.name}
            className="help is-danger"
            />
        </>
    )
}

interface InputsFieldProps{
    label: string;
    name: string;
    type: string;
    placeholder: string;
}