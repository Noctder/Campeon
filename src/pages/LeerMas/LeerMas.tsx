import Header from "../../components/Header/Header";

import './LeerMas.css';

import lic from '../../assets/images/lic_v.png';
import firma from '../../assets/images/firma.png';
import Footer from "../../components/Footer/Footer";

export default function LeerMas() {
    return(
        <>
            <Header/>
            <br />
            <div className="contenedor">
                <div className="contenedor contenido-principal">
                    <main className="carta">
                        <h3>A la comunidad de usuarios del Campeón Plus.</h3>
                        <article className="carta_obtener">
                            <p>
                            Durante 44 años, el Campeón Plus ha estado presente en la ingeniería de proyectos, como el producto generador de innovación en análisis de costos, programación de proyectos y administración de éstos.
                            </p>
                            <p>
                            En ese tiempo, cumplimos el sueño de llegar a toda la República Mexicana, Centro y Sudamérica, el Sur de los Estados Unidos y hasta algunas regiones de Europa. Atendimos a miles de empresasusuarias del sistema y lo obsequiamos a cientos de universidades, más otras tantas instituciones públicas que no contaban con los recursos para hacerse de tecnología.
                            </p>
                            <p>
                            Pero todas las historias terminan y, después de 44 años, sabemos que el producto debe abrirse a la comunidad y dejar de ser nuestro, para integrarse al conocimiento colectivo.
                            </p>
                            <p>
                            Los nuevos caminos de nuestra industria nos han abierto otras perspectivas, al tiempo que la relevancia del sistema ha venido a convertirse en parte de una maquinaria más compleja que apunta hacia la instauración de la tecnología BIM (o MIC, como se le ha dado en llamar en México) y creemos que, en esta nueva oleada, nuestro camino es menos de difusión del conocimiento y más de aplicación técnica en proyectos de construcción como los que hemos venido atendiendo desde inicios de este siglo.
                            </p>
                            <p>
                            Pero la comunidad de usuarios del Campeón Plus es suficientemente grande como para cambiar también a un entorno de desarrollo “Open Source”, o de código abierto.
                            </p>
                            <br />
                            <p>
                            Es por ello, que el día de hoy entrego tres herramientas para que ustedes avancen en el camino de mejorar, crecer o hacer diferente el sistema:
                            </p>
                            <br />
                            <ol>
                                <li>
                                    A partir de hoy, estará disponible el código fuente del Campeón Plus Smart X2. Ustedes podrán descargarlo, modificarlo y recompilarlo a su antojo; emplear partes del código para otros propósitos e inclusive vender sus desarrollos sin más restricción que la inclusión visible para cualquier usuario y visualmente a la entrada del sistema del texto “Esto producto está parcialmente basado en el código fuente de MSW, Campeón Plus Smart X2©”.
                                </li>
                                <li>
                                    Al mismo tiempo, hemos subido 1,000 números de serie que Ud. podrá descargar si quiere emplear el Campeón Plus Smart X2 sin modificar o compilar el código fuente. Cada número de serie quedará registrado al número de “cliente” (usuario) que se le asigne. De terminarse los números de serie, subiremos más, ad libitum.
                                </li>
                                <li>
                                    Aquí mismo, encontrarán un enlace a la página de consultas en colaboración, donde cada usuario podrá plantear sus preguntas y la comunidad de usuarios proponer soluciones. Cuando tengamos oportunidad, estaremos participando con ustedes, pero ya no daremos más soporte técnico, ni siquiera por correo electrónico, de manera directa a partir del 1° de septiembre de 2022.
                                </li>
                            </ol>
                            <br />
                            <p>
                                Ha sido un gran honor haber participado en este viaje. Durante todo este tiempo, más de 500 personas participamos en algún momento para tener el producto que ustedes necesitaban. Hoy, a mis 66 años, me siento feliz de haber iniciado la transformación digital de la industria de laconstrucción en México y sentado las bases para que nuestra industria continúe por el camino del éxito.    
                            </p>            
                            <br />
                            <p>
                                Tenemos muchos proyectos, estoy seguro de que por el camino nos volveremos a encontrar. Mientras tanto, les dejo un abrazo fraterno y todo mi agradecimiento.    
                            </p>  
                            <br />              
                        </article>
                    </main>
                    <div className="input_flex">
                        <div className="logo_lic">
                            <img src={lic} alt="Lic" width="100%" className="no-margin  image_radius"/>
                        </div>
                        <div className="logo_firma">
                            <img src={firma}  alt="Firma"  width="100%" className="no-margin "/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}