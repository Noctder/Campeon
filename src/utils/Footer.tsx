import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import campeonf from '../assets/images/campeon_f.png';
import { ROUTES } from '../constants/Routes';

import './Footer.css';

export default function Footer() {
    return(
        <footer className='text-black' style={{backgroundColor: "#F4F0F0"}}>
            <Container fluid className='p-4'>
                <Row>
                    <Col lg="7" md="12" sm="12" xs="12" className='mb-4 mb-md-0 logo_campeon'>
                        <img src={campeonf} width="80%" alt="Logo" />
                    </Col>
                    <Col lg="1" md="6" sm="6" xs="6" className='mb-4 mb-md-0 media_sm'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <NavLink to={ROUTES.CARTA} className="nav-link" style={{color: "#000000"}}>
                                    <b>CARTA DE CMW</b>
                                </NavLink>
                                <br />
                                <NavLink to={ROUTES.VIDEOS} className="nav-link" style={{color: "#000000"}}>
                                    VIDEOS
                                </NavLink>
                                <br />
                                <NavLink to={ROUTES.DOCUMENTOS} className="nav-link" style={{color: "#000000"}}>
                                    DOCUMENTOS
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col lg="1" md="6" sm="6" xs="6" className='mb-4 mb-md-0 media_sm'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <NavLink to={ROUTES.CARTA} className="nav-link" style={{color: "#000000"}}>
                                    <b>OBTENER GRATIS</b>
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col lg="1" md="6" sm="6" xs="6" className='mb-4 mb-md-0 media_sm'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <NavLink to={ROUTES.CARTA} className="nav-link" style={{color: "#000000"}}>
                                    <b>SECCIÓN APOYO</b>
                                </NavLink>
                                <br />
                                <NavLink to={ROUTES.FORO} className="nav-link" style={{color: "#000000"}}>
                                    FORO
                                </NavLink>
                                <br />
                                <NavLink to={ROUTES.FAQ} className="nav-link" style={{color: "#000000"}}>
                                    FAQ'S
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col lg="1" md="6" sm="6" xs="6" className='mb-4 mb-md-0 media_sm'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <NavLink to={ROUTES.CARTA} className="nav-link" style={{color: "#000000"}}>
                                    <b>CONTACTO</b>
                                </NavLink>
                                <br />
                                <NavLink to={ROUTES.FORO} className="nav-link" style={{color: "#000000"}}>
                                    CORPORATIVO MSW
                                </NavLink>
                                <br />
                                <NavLink to={ROUTES.POLITICAS} className="nav-link" style={{color: "#000000"}}>
                                    PRIVACIDAD Y SEGURIDAD
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                MSW Tecnologías S.A. de C.V. 2022
            </div>
        </footer>
    )
}