import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import msw from '../../assets/images/msw.svg';

import './Header.css';
import { Link } from "@mui/material";

export default function Header() {

    function cargarHeader(){
        const path = window.location.pathname;
        if (path == "/Obtener" || path == "/LeerMas" || path == "/Politicas") {
            const fontStyle = document.getElementById("inicio")
            if(fontStyle != undefined){
                fontStyle.style.fontWeight = "900";
            }
        }
    }

    return(
        <header className="headerr" onLoad={() => {cargarHeader()}}>
            <div className="contenedor">
                <div className="barra">
                    <NavLink to={ROUTES.ROOT} className="nav-link logo">
                        <img src={msw} alt="Logo" className="no-margin"/>
                    </NavLink>
                    <nav className="navegacion">
                        <NavLink to={ROUTES.ROOT} className="nav-link navegacion_enlace" id="inicio" style={({isActive}) => ({
                                    fontWeight: isActive ? '900' : '',
                                    color: '#FFFFFF7F',
                                })}>
                            Inicio
                        </NavLink>
                        <NavLink to={ROUTES.DOCUMENTOS} className="nav-link navegacion_enlace" style={({isActive}) => ({
                                    fontWeight: isActive ? '900' : '',
                                    color: '#FFFFFF7F'
                                })}>
                            Documentos
                        </NavLink>
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
        </header>
    )
}