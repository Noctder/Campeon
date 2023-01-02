import { Accordion, AccordionDetails , AccordionSummary , Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from "../../components/Header/Header";
import './FAQ.css';

import React from "react";  
import Footer from "../../components/Footer/Footer";

export default function FAQ() {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(
        <>
            <Header/>
            <br />
            <div className="contenedor">
                <div className="contenedor contenido-principal">
                    <main className="carta">
                        <h3>FAQ'S</h3>
                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={0}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>El Campeón no le permite agregar mas partidas o algún insumo a los Precios Unitarios</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                        Revisar que no se tenga ninguna otra ventana abierta, para hacer esto es cuestión de darle <b>RESTAURAR POSICIÓN DE VENTANAS</b> en la pestaña de <b>VENTANAS</b>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={0}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>Por alguna razón te pide los datos de usuario o se formateo el equipo.</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Llamar a el área de <b>SOPORTE</b> para que se le desactive la licencia.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={0}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>A la hora de instalar el programa, te marca error en el SQL</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Es cuestión de verificar que no le falten actualizaciones a Windows y revisar que ese usuario tenga todos los permisos de Administrador que se requieren
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={0}>
                                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Cómo desactivar la LICENCIA del programa, para poderlo usar en otro equipo?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Para <b>DESACTIVAR LICENCIA</b>, es entrar al programa, después dar clic en <b>HERRAMIENTAS</b> y al final viene la opción de <b>DESACTIVAR LICENCIA.</b>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation={0}>
                                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Cómo agregar mas porcentajes de los que ya trae el programa ó hacer modificaciones?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    La forma de hacer alguna modificación o agregar componentes, es exportarlo al formato Excel y realice los ajustes que requiera.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} elevation={0}>
                                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Como agregar una unidad nueva en el programa?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Para agregar una unidad nueva en el programa, te vas a <b>HERRAMIENTAS</b>, <b>UNIDADES</b>, se coloca en la dimensión que se requiera, se le da en el símbolo de mas, después pones el nombre de la unidad, su abreviatura (sin espacios ni guiones) y se le da <b>GUARDAR</b>.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} elevation={0}>
                                <AccordionSummary aria-controls="panel7d-content" id="panel7d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Como puede pasar un presupuesto de una computadora a otra?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Primero hay que desconectar el proyecto en él equipo que se esta utilizando y después copiarlo en la otra maquina. 
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} elevation={0}>
                                <AccordionSummary aria-controls="panel8d-content" id="panel8d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Cómo puede dividir una partida en varias actividades? En el PROGRAMA DE OBRA</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Se le da doble clic a la barra de la tarea, de ahí se le da en el cuadro de <b>DIVIDIR CONCEPTO</b>, se le ponen los datos de la <b>CLAVE</b>, el <b>NOMBRE</b> y de ahí se le pone el porcentaje que tendrá esa parte, se le da eliminar la precedente para que pueda capturar los datos de la siguiente, se captura los datos de la siguiente (es), se les coloca las fechas deseadas para cada actividad y se cierra la ventana y ya queda dividida una tarea en varias.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} elevation={0}>
                                <AccordionSummary aria-controls="panel9d-content" id="panel9d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Cómo conectar un proyecto?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Te vas a <b>PROYECTO</b> y en los iconos de la parte inferior, el que esta a un lado del botón de apagado <b>(CONECTAR PROYECTO)</b> se le da clic, en la ventana se busca en donde esta guardado el proyecto, solo es cuestión de ir agregando los que se requieran,  se le da aceptar y con eso queda dado de alta la obra.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} elevation={0}>
                                <AccordionSummary aria-controls="panel10d-content" id="panel10d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>A la hora de querer imprimir alguno de los REPORTES, aparece que no por que no se encontraba registros en la Tabla de Explosión de Insumos. Para ver este reporte correctamente necesita agregar insumos y/o generar la tabla.</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Primero realizar el proceso completo de <b>CÁLCULOS DE PRESUPUESTO</b> y si el problema continua se tienen que revisar las <b>CONSTANTES (K)</b> de <b>PRESUPUESTO</b> no se tenga valor en el <b>% INDIRECTOS</b>, ya que estos van en los <b>PRECIOS UNITARIOS</b>, es una forma rápida de arreglar el problema.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} elevation={0}>
                                <AccordionSummary aria-controls="panel11d-content" id="panel11d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Dónde se le cambia el porcentaje de Utilidad, Costo Indirecto de Obra, Costo Financiamiento, etc.?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    En la parte inferior de la ventana de los <b>PRECIOS UNITARIOS</b> aparecen varios botones, se le da clic en <b>CONSTANTES (K)</b>, de ahí se despliega otra ventana donde aparecen las constantes que se están utilizando y de esa ventana se le pueden ir agregando las cantidades que se requieran.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} elevation={0}>
                                <AccordionSummary aria-controls="panel12d-content" id="panel12d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>No se pueden mandar a generar los análisis</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Si se tienen costos en frío no será posible generar, ya que para estos deben estar <b>ANALIZADO</b>. 
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} elevation={0}>
                                <AccordionSummary aria-controls="panel13d-content" id="panel13d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>No le aparece el PROGRAMA DE OBRA</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Cada que realice un cambio en el presupuesto o por primera vez se va abrir el <b>PROGRAMA DE OBRA</b>, es necesario realizar el proceso completo de <b>CÁLCULOS PRESUPUESTO</b> para que se actualicen los datos.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} elevation={0}>
                                <AccordionSummary aria-controls="panel14d-content" id="panel14d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>Realiza un PROGRAMA DE OBRA por partida, ¿cuando ingrese el presupuesto completo le eliminara el que ya capturo?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    La hora de agregar todo el presupuesto, se le va a modificar el PROGRAMA DE OBRA, ya que toma lo que esta cargado.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} elevation={0}>
                                <AccordionSummary aria-controls="panel15d-content" id="panel15d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>Error a la hora de pasar de Excel a Campeón Plus Smart. No existe en la hoja de Excel columna con etiqueta descripción se cancela la importación a Excel.</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Antes que nada hay que revisar primero que todo este bien escrito, de ahí modificar el estilo de la celda (General), si no funciona, entonces hay que guardar el archivo como <b>LIBRO DE EXCEL</b> ó <b>VERSIÓN 2003</b>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')} elevation={0}>
                                <AccordionSummary aria-controls="panel16d-content" id="panel16d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>Se descargo el programa pero a la hora de abrirlo no lo ejecuta, solo se queda en la pantalla de inicio (El logo de Campeón Plus Smart)</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Se le debe instalar desde <b>INSTALACPLUS</b> para instalar el programa como se debe. Primero hay que descomprimir el archivo y de ahí instalarlo.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')} elevation={0}>
                                <AccordionSummary aria-controls="panel17d-content" id="panel17d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>A la hora de querer generar un REPORTE, le aparece un letrero que dice "NO SE ENCONTRARON REGISTROS EN LA TABLA DE EXPLOSIÓN DE INSUMOS"</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Este problema se soluciona dándole <b>RECALCULAR</b>, tienen que ser completo (<b>RECALCULAR y GENERARAR TABLA PARA EXPLOSION DE INSUMOS</b> o <b>SUPERTABLA</b>).
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')} elevation={0}>
                                <AccordionSummary aria-controls="panel18d-content" id="panel18d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Cómo pasar de Excel a Campeón Plus Smart?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    Se debe revisar el formato que se encuentra en la página web <b>www.campeonplus.com.mx</b>, después te vas a <b>ARCHIVO</b>, <b>IMPORTAR</b> y de ahí se le da <b>EXCEL FORMATO ESTÁNDAR</b>, de ahí se busca el archivo que se quiere importar y ya se le da en la <b>PALOMITA</b> y con eso queda cargado el proyecto.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')} elevation={0}>
                                <AccordionSummary aria-controls="panel19d-content" id="panel19d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>¿Cómo realizar una COPIA de una TARJETA de Precios Unitarios? Ya que ambas tienen los mismos materiales.</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    En <b>PRECIOS UNITARIOS</b>, se da de alta una <b>NUEVA TARJETA</b>, se le agrega el código y en los iconos de la parte inferior se le da clic al segundo que esta de izquierda a derecha, aquí se busca concepto que se quiere copiar, ya sea de otro presupuesto o del mismo y se le da en la <b>PALOMITA</b> y con eso se integra una copia de la <b>TARJETA</b>, solo es cuestión de capturar la descripción del concepto y las modificaciones que se le quieran realizar.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')} elevation={0}>
                                <AccordionSummary aria-controls="panel20d-content" id="panel20d-header" expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontWeight: "bold", textAlign: "justify"}}>No entra al Campeón SMART</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{textAlign:"justify"}}>
                                    <p>Puede ser que el proyecto haya quedado mal cerrado en su base de datos o se haya dañado. Por tal razón, el Campeón trata de abrirlo y la base de datos SQL "truena" al no poder resolver la solicitud del sistema.</p>
                                    <br />
                                    <p>Para corregir esto, vaya al directorio del Campeón a la carpeta de CONFIGURACIÓN, ésta es la ruta completa normelmente:</p>
                                    <br />
                                    <p>c: / Archivos de programa (x86) / MSW / Campeón Plus Smart X2 / Configuracion</p>
                                    <br />
                                    <p>Ahí, localice el archivo "Datos_Default.xml" y ábralo con el BLOC DE NOTAS</p>
                                    <br />
                                    <p>Una vez abierto busque:</p>
                                    <br />
                                    <p>"UltimoProyectoSeleccionado"
                                            "Proyecto_Id" 62 "/Proyecto_Id"
                                        "/UltimoProyectoSeleccionado"
                                    </p>
                                    <br />
                                    <p>Y cambie el Proyecto_Id por cero:</p>
                                    <br />
                                    <p>"UltimoProyectoSeleccionado"
                                            "Proyecto_Id" 0 "/Proyecto_Id"
                                        "/UltimoProyectoSeleccionado"
                                    </p>
                                    <br />
                                    <p>Después grábelo y entre al Campeón. Espero que con esto resuelva su problema.</p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    )
}