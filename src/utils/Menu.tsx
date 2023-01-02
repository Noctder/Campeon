import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/Routes";

import msw from '../assets/images/msw.png';
import campeon from '../assets/images/campeon.png';
import obtener from '../assets/images/obtener.png';

import lic from '../assets/images/lic.png';
import linea2 from '../assets/images/linea2.jpg';
import Paso from '../assets/images/Paso.png';

import campeonblack from '../assets/images/campeon_black.png';
import facil from '../assets/images/letrasfacil.png';
import QueEs from '../assets/images/que es.png';

import './Menu.css';
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { MDBCol, MDBIcon, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from "mdb-react-ui-kit";

export default function Menu() {

    const [iconsActive, setIconsActive] = useState('tab1');

    const handleIconsClick = (value: string) => {
        if (value === iconsActive) {
            
            return;
        }

        setIconsActive(value);
    };
    
    return(
        <>
            <header className="header">
                <div className="contenedor">
                    <div className="barra">
                        <NavLink to={ROUTES.ROOT} className="nav-link logo">
                            <img src={msw} alt="Logo" className="no-margin"/>
                        </NavLink>
                        <nav className="navegacion">
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
                <div className="header_centro">
                    <img src={campeon} width="50%" alt="Titulo" className="no-margin campeon"/>
                    <br />
                    <NavLink to={ROUTES.OBTENER} className="no-margin campeone" >
                        <img src={obtener} width="25%" alt="Obtener" className="no-margin obtener"/>
                    </NavLink>
                </div>
            </header>
            <br />
            <div className="contenedor contenido-principal">
                <main className="carta">
                    <br />
                    <h3 style={{color: '#000000'}}>A la comunidad de usuarios del Campeón Plus</h3>
                    <Card style={{width: '100%', border:'none'}}>
                        <Row className="entrada">
                            <Col md='4'>
                                <Card.Img src={lic}/>       
                            </Col>
                            <Col md='8'>
                                <Card.Body style={{textAlign: 'justify'}} className="alinear-derecha flex_carta">
                                    <Card.Text>
                                    Durante 44 años, el Campeón Plus ha estado presente en la ingeniería de proyectos, como el producto generador de innovación en análisis de costos, programación de proyectos y administración de éstos.
                                    </Card.Text>
                                    <br />
                                    <Card.Text>
                                    En ese tiempo, cumplimos el sueño de llegar a toda la República
                                    Mexicana, Centro y Sudamérica, el Sur de los Estados Unidos y hasta
                                    algunas regiones de Europa. Atendimos a miles de empresas
                                    usuarias del sistema y lo obsequiamos a cientos de universidades,
                                    más otras tantas instituciones públicas que no contaban con los
                                    recursos para hacerse de tecnología.
                                    </Card.Text>
                                    <br />
                                    <Card.Text>
                                    Pero todas las historias terminan y, después de 44 años, sabemos que el producto debe abrirse a la comunidad y dejar de ser nuestro, para integrarse al conocimiento colectivo.
                                    </Card.Text>
                                    <br />
                                    <Card.Text>
                                        <Button className="boton_carta"  href={ROUTES.LEER}>Leer Más</Button>
                                    </Card.Text>                                    
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    <br />
                    <Card style={{width: '100%', border:'none'}}>
                        <MDBRow className="icons_Text" >
                            <MDBCol size='1' className="tabs_icons">
                                <MDBTabs pills className='flex-column' style={{alignItems: "center"}}>
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{width: "5%", backgroundColor:"#FFFFFF", boxSizing:"unset"}} className="rounded-circle border border-2 border-info" onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'} >
                                            <MDBIcon fas icon='mobile-alt'/>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <Card.Img src={linea2} style={{width: "10%"}}/>
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{width: "5%", backgroundColor:"#FFFFFF", boxSizing:"unset"}} className="rounded-circle border border-2 border-info" onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
                                            <MDBIcon fas icon='pencil-alt' />
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <Card.Img src={linea2} style={{width: "10%"}}/>
                                    <MDBTabsItem>
                                        <MDBTabsLink style={{width: "5%", backgroundColor:"#FFFFFF", boxSizing:"unset", transition:"false"}} className="rounded-circle border border-2 border-info" onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
                                            <MDBIcon fas icon='briefcase'/>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                </MDBTabs>
                            </MDBCol>
                            <MDBCol size='7' className="tabs_descripcion" style={{display: 'flex', flexDirection: 'column'}}>
                                <Card.Img src={campeonblack} style={{width: '40%'}} className="campeonblack"/>
                                <br />
                                <Card.Img src={facil} style={{width: '20%'}} className="facil"/>
                                <MDBTabsContent>                                    
                                    <MDBTabsPane show={iconsActive === 'tab1'}>
                                        <Col>
                                            <Card.Body style={{textAlign: 'justify'}}>                                                
                                                <Card.Text>
                                                    <p>
                                                    Campeón Plus es un Sistema para la administración de proyectos que ha logrado solucionar de forma integral las necesidades de la industria contemplando la Presupuestación, programación y control.
                                                    </p>
                                                    <br />
                                                    <p>
                                                    Este software es de aplicación principalmente a la industria de la construcción, pero puede adaptarse a las necesidades de otros sectores.Campeón Plus es un Sistema para la administración de proyectos que ha logrado solucionar de forma integral las necesidades de la industria contemplando la Presupuestación, programación y control.
                                                    </p>
                                                    <br />
                                                    <div className='imagen_boton'></div>
                                                </Card.Text>
                                            </Card.Body>                                        
                                        </Col>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={iconsActive === 'tab2'}>
                                        <Card.Body style={{textAlign: 'justify'}}>
                                            <Card.Text>
                                                <p>
                                                Campeón plus smart, siendo este nuestro sistema más nuevo en el cual, nos preocupamos de que el sistema pudiera:
                                                </p>
                                                <br />
                                                <p>
                                                • Reducir el tiempo de Presupuestación y programación de un proyecto para ser presentado a concurso.
                                                </p>
                                                <p>
                                                • Ajustar todos los formatos a la Ley de Obras Públicas y el Reglamento vigentes para evitar descalificaciones.
                                                </p>
                                                <p>
                                                • Hacer coincidir todos los resultados para que éstos cuadren hasta en los centavos.
                                                </p>
                                                <p>
                                                • Y, finalmente, propiciar que lo que usted vea sea exactamente tal y como va a ser impreso o exportado a Excel® o PDF®.
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </MDBTabsPane>
                                    <MDBTabsPane show={iconsActive === 'tab3'}>
                                        <Card.Body style={{textAlign: 'justify'}}>
                                            <Card.Text>
                                            <p>
                                            Esto sin demérito de que el sistema sea fácil de uso, intuitivo y rápido. Metas difíciles, que usted habrá de poner a prueba, pues –tal y como lo hemos valorado en nuestros laboratorios- el sistema Campeón Plus Smart ahorra tiempo y asegura la calidad del trabajo muy por encima de lo que otros productos pueden hacer.
                                            </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </MDBTabsPane>
                                </MDBTabsContent>
                            </MDBCol>
                            <MDBCol size='4' className="tabs_descripcion">
                                <MDBTabsContent>
                                    <MDBTabsPane show={iconsActive === 'tab1' || iconsActive === 'tab2' || iconsActive === 'tab3'}>
                                        <Col>
                                            <Card.Body style={{textAlign: 'justify'}}>
                                                <Card.Img src={QueEs} style={{width: '40%'}}/>
                                                <br /><br />
                                                <Card.Text>
                                                    <iframe src="//www.youtube.com/embed/mOMOQlPweqg" width={420} height={315} allowFullScreen className='video_iframe'></iframe>
                                                </Card.Text>
                                            </Card.Body>                                        
                                        </Col>
                                    </MDBTabsPane>
                                </MDBTabsContent>
                            </MDBCol>                
                        </MDBRow>
                    </Card>
                </main>
                <br />
            </div>
            <img src={Paso} width="100%" alt="Logo" />
        </>
    )
}