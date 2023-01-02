import { ErrorMessage, useField } from 'formik'
import React from 'react';
import './InputsField.css';

export default function SelectField(props:SelectFieldProps) {

    const [field, meta] = useField(props.label)

    return(
        <>
            <label className="label">{props.label}</label>
            <select
            className={`input ${meta.touched && meta.error && 'is-danger'}`}
            autoComplete="off"
            {...field}
            {...props}
            >
                <option value="1">Fines Académicos</option>
            </select>
            <ErrorMessage
            component="div"
            name={field.name}
            className="help is-danger"
            />
        </>
    )
}

interface SelectFieldProps{
    label: string;
    name: string;
    type: string;
    placeholder: string;
}