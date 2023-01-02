import { ROUTES } from "../constants/routes";

import lic from '../assets/images/lic.png';

import './Menu.css';
import Carta from "../components/Carta/Carta";
import { Box, Button, Card, CardContent, CardMedia} from "@mui/material";
import Videos from "../components/Video/Videos";

import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from "react";
import Footer from "../components/Footer/Footer";
import MenuNav from "../components/MenuNav/MenuNav";

export default function Menu() {

    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 1, delay: 1 });
    
    
    return(
        <>
            <div id="inicio" ref={scrollRef}>
                <MenuNav/>
                <div className="contenedor contenido-principal">
                    <main className="carta">
                        <h3 style={{color: '#000000'}}>A la comunidad de usuarios del Campeón Plus</h3>
                        <Card sx={{ display: 'flex' }} className='entrada'>
                            <CardMedia
                                component="img"
                                sx={{ width:'20%'}}
                                image={lic}
                                alt="carta"
                                className="logo-lic"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent style={{textAlign: 'justify'}}>
                                    <p>
                                        Durante 44 años, el Campeón Plus ha estado presente en la ingeniería de proyectos, como el producto generador de innovación en análisis de costos, programación de proyectos y administración de éstos.
                                    </p>
                                    <br />
                                    <p>
                                        En ese tiempo, cumplimos el sueño de llegar a toda la República Mexicana, Centro y Sudamérica, el Sur de los Estados Unidos y hasta algunas regiones de Europa. Atendimos a miles de empresas usuarias del sistema y lo obsequiamos a cientos de universidades, más otras tantas instituciones públicas que no contaban con los recursos para hacerse de tecnología.
                                    </p>
                                    <br />
                                    <p>
                                        Pero todas las historias terminan y, después de 44 años, sabemos que el producto debe abrirse a la comunidad y dejar de ser nuestro, para integrarse al conocimiento colectivo.
                                    </p>
                                    <br />
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button className="boton_carta" href={ROUTES.LEER}>Leer Más</Button>
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>                    
                    </main>
                </div>
                <br />
                <Carta/>
                <br />
                <Videos/>
                <Footer/>
            </div>
        </>
    )
}