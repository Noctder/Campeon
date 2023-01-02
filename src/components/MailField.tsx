import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
export default function MailField(props:MailFieldProps) {

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
                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name={props.name}
                            label={props.label}
                            type="email"
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

interface MailFieldProps{
    label: string;
    name: string;
    placeholder: string;
}
