import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/Routes";

import msw from '../assets/images/msw.png';

import './Header.css';

export default function Header() {
    return(
        <header className="headerr">
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
                        <NavLink to={ROUTES.VIDEOS} className="nav-link navegacion_enlace" style={({isActive}) => ({
                                    fontWeight: isActive ? '900' : '',
                                    color: '#FFFFFF7F'
                                })}>
                            Videos
                        </NavLink>
                        <NavLink to={ROUTES.FORO} className="nav-link navegacion_enlace" style={({isActive}) => ({
                                    fontWeight: isActive ? '900' : '',
                                    color: '#FFFFFF7F'
                                })}>
                            Foro
                        </NavLink>
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