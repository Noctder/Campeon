import { Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import msw from '../../assets/images/msw.svg';
import campeon from '../../assets/images/campeon.svg';

import './MenuNav.css';

export default function MenuNav(){
    return(
        <header className="header">
            <div className="contenedor">
                <div className="barra">
                    <NavLink to={ROUTES.ROOT} className="nav-link logo">
                        <img src={msw} alt="Logo" className="no-margin"/>
                    </NavLink>
                    <nav className="navegacion" >
                        <NavLink to={ROUTES.ROOT} className="nav-link navegacion_enlace" style={({isActive}) => ({
                                    fontWeight: isActive ? '900' : '',
                                    color: '#FFFFFF7F'
                                })}>
                            Inicio
                        </NavLink>
                        <NavLink to={ROUTES.DOCUMENTOS} className="nav-link navegacion_enlace" style={({isActive}) => ({
                                    fontWeight: isActive ? '900' : '',
                                    color: '#FFFFFF7F'
                                })}>
                            Documentos
                        </NavLink>
                        <Link href="#galeria" color="inherit" className="nav-link navegacion_enlace" style={{color: '#FFFFFF7F', textDecoration:"none", transitionDuration: "10"}}>
                            Video
                        </Link>
                        <Link href="https://smart.foroactivo.com" color="inherit" className="nav-link navegacion_enlace" style={{color: '#FFFFFF7F', textDecoration:"none"}}>
                            Foro
                        </Link>
                        <NavLink to={ROUTES.FAQ} className="nav-link navegacion_enlace" style={({isActive}) => ({
                                    fontWeight: isActive ? '900' : '',
                                    color: '#FFFFFF7F'
                                })}>
                            FAQ's
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className="header_centro">
                <img src={campeon} width="50%" alt="Titulo" className="no-margin campeon"/>
                <br />
                <Button className="boton_obtener" href={ROUTES.OBTENER}>OBTENER GRATIS</Button>
            </div>
        </header>
    )
} 