// import { Col, Container, Row } from 'react-bootstrap';
import { Box, Grid, Link } from '@mui/material';
import campeonf from '../../assets/images/campeon_f.svg';
import { ROUTES } from "../../constants/routes";

import './Footer.css';

export default function Footer() {
    return(
        <footer className='text-black' style={{backgroundColor: "#F4F0F0"}}>
            <Box className='text-center'>
                <Grid container>
                    <Grid item lg={6} md={12} sm={12} xs={12} className='logo_campeon' style={{textAlign: "center"}}>
                        <Link href="/#inicio">
                            <img src={campeonf} width="80%" alt="Logo" />
                        </Link>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12} container className='no_height'>
                        <Grid item lg={3} md={3} sm={3} xs={6}>
                            <Box style={{textAlign:"center"}}>
                                <Link  color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    <b>CARTA DE CMW</b>
                                </Link>
                            </Box>
                            <br />
                            <Box style={{textAlign:"center"}}>
                                <Link href="/#galeria" color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    VIDEO
                                </Link>
                            </Box>
                            <br />
                            <Box style={{textAlign:"center"}}>
                                <Link href={ROUTES.DOCUMENTOS} color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    DOCUMENTOS
                                </Link>
                            </Box>
                            <br />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xs={6}>
                            <Box style={{textAlign:"center"}}>
                                <Link href={ROUTES.OBTENER} color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    <b>OBTENER GRATIS</b>
                                </Link>
                            </Box>
                            <br />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xs={6}>
                            <Box style={{textAlign:"center"}}>
                                <Link color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    <b>SECCIÓN APOYO</b>
                                </Link>
                            </Box>
                            <br />
                            <Box style={{textAlign:"center"}}>
                                <Link href="https://smart.foroactivo.com" color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    FORO
                                </Link>
                            </Box>
                            <br />
                            <Box style={{textAlign:"center"}}>
                                <Link href={ROUTES.FAQ} color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    FAQ'S
                                </Link>
                            </Box>
                            <br />
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xs={6}>
                            <Box style={{textAlign:"center"}}>
                                <Link color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    <b>CONTACTO</b>
                                </Link>
                            </Box>
                            <br />
                            <Box style={{textAlign:"center"}}>
                                <Link href="https://msw.com.mx" color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    CORPORATIVO MSW
                                </Link>
                            </Box>
                            <br />
                            <Box style={{textAlign:"center"}}>
                                <Link href={ROUTES.POLITICAS} color="inherit" style={{textDecoration:"none", fontSize:"60%"}}>
                                    PRIVACIDAD Y SEGURIDAD
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box bgcolor="rgba(0, 0, 0, 0.2)" style={{textAlign:"center"}}>
                MSW Tecnologías S.A. de C.V. 2022
            </Box>
        </footer>
    )
}