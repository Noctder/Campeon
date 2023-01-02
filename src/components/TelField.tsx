import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import React from 'react';

export default function TelField(props:TelFieldProps) {

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
                        <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name={props.name}
                            label={props.label}
                            type="number"
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

interface TelFieldProps{
    label: string;
    name: string;
    placeholder: string;
}