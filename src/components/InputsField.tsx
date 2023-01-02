import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react';

export default function InputsField(props:InputsFieldProps) {

    return(
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name={props.name}
                            label={props.label}
                            placeholder={props.placeholder}
                            required
                        >
                        </TextField>
                    </Box>
                </div>
            </Box>
        </>
    )
}

interface InputsFieldProps{
    label: string;
    name: string;
    placeholder: string;
}