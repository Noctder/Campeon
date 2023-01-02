import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ArticleIcon from '@mui/icons-material/Article';
import React from 'react';

const currencies = [
    {
      value: 'Fines_Academicos',
      label: 'Fines Académicos',
    },
    {
      value: 'Fines_Politicos',
      label: 'Fines Politicos',
    },
    {
      value: 'Fines_Sociales',
      label: 'Fines Sociales',
    },
    {
      value: 'Fines_Culturales',
      label: 'Fines Culturales',
    },
];

export default function SelectField(props:SelectFieldProps) {

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
                        <ArticleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            select
                            required
                            label={props.label}
                            defaultValue={props.defaultValue}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </div>
            </Box>
        </>
    )
}

interface SelectFieldProps{
    label: string;
    defaultValue: any;
}