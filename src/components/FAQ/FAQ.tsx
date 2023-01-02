import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Header from "../../utils/Header";

import './FAQ.css';

export default function FAQ() {
    return(
        <>
            <Header/>
            <br />
            <div className="contenedor">
                <div className="contenedor contenido-principal">
                    <main className="carta">
                        <h3>FAQ'S</h3>
                        <MDBAccordion flush initialActive={1}>
                            <MDBAccordionItem collapseId={1} headerTitle='El Campeón no le permite agregar mas partidas o algún insumo a los Precios Unitarios' style={{textAlign:"justify"}}>
                                Revisar que no se tenga ninguna otra ventana abierta, para hacer esto es cuestión de darle <b>RESTAURAR POSICIÓN DE VENTANAS</b> en la pestaña de <b>VENTANAS</b>
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={2} headerTitle='Por alguna razón te pide los datos de usuario o se formateo el equipo.' style={{textAlign:"justify"}}>
                                Llamar a el área de <b>SOPORTE</b> para que se le desactive la licencia.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={3} headerTitle='A la hora de instalar el programa, te marca error en el SQL' style={{textAlign:"justify"}}>
                                Es cuestión de verificar que no le falten actualizaciones a Windows y revisar que ese usuario tenga todos los permisos de Administrador que se requieren
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={4} headerTitle='¿Cómo desactivar la LICENCIA del programa, para poderlo usar en otro equipo?' style={{textAlign:"justify"}}>
                                Para <b>DESACTIVAR LICENCIA</b>, es entrar al programa, después dar clic en <b>HERRAMIENTAS</b> y al final viene la opción de <b>DESACTIVAR LICENCIA.</b>
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={5} headerTitle='¿Cómo agregar mas porcentajes de los que ya trae el programa ó hacer modificaciones?' style={{textAlign:"justify"}}>
                                La forma de hacer alguna modificación o agregar componentes, es exportarlo al formato Excel y realice los ajustes que requiera.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={6} headerTitle='¿Como agregar una unidad nueva en el programa?' style={{textAlign:"justify"}}>
                                Para agregar una unidad nueva en el programa, te vas a <b>HERRAMIENTAS</b>, <b>UNIDADES</b>, se coloca en la dimensión que se requiera, se le da en el símbolo de mas, después pones el nombre de la unidad, su abreviatura (sin espacios ni guiones) y se le da <b>GUARDAR</b>.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={7} headerTitle='¿Como puede pasar un presupuesto de una computadora a otra?' style={{textAlign:"justify"}}>
                                Primero hay que desconectar el proyecto en él equipo que se esta utilizando y después copiarlo en la otra maquina. 
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={8} headerTitle='¿Cómo puede dividir una partida en varias actividades? En el PROGRAMA DE OBRA' style={{textAlign:"justify"}}>
                                Se le da doble clic a la barra de la tarea, de ahí se le da en el cuadro de <b>DIVIDIR CONCEPTO</b>, se le ponen los datos de la <b>CLAVE</b>, el <b>NOMBRE</b> y de ahí se le pone el porcentaje que tendrá esa parte, se le da eliminar la precedente para que pueda capturar los datos de la siguiente, se captura los datos de la siguiente (es), se les coloca las fechas deseadas para cada actividad y se cierra la ventana y ya queda dividida una tarea en varias.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={9} headerTitle='¿Cómo conectar un proyecto?' style={{textAlign:"justify"}}>
                                Te vas a <b>PROYECTO</b> y en los iconos de la parte inferior, el que esta a un lado del botón de apagado <b>(CONECTAR PROYECTO)</b> se le da clic, en la ventana se busca en donde esta guardado el proyecto, solo es cuestión de ir agregando los que se requieran,  se le da aceptar y con eso queda dado de alta la obra.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={10} headerTitle='A la hora de querer imprimir alguno de los REPORTES, aparece que no por que no se encontraba registros en la Tabla de Explosión de Insumos. Para ver este reporte correctamente necesita agregar insumos y/o generar la tabla.' style={{textAlign:"justify"}}>
                                Primero realizar el proceso completo de <b>CÁLCULOS DE PRESUPUESTO</b> y si el problema continua se tienen que revisar las <b>CONSTANTES (K)</b> de <b>PRESUPUESTO</b> no se tenga valor en el <b>% INDIRECTOS</b>, ya que estos van en los <b>PRECIOS UNITARIOS</b>, es una forma rápida de arreglar el problema.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={11} headerTitle='¿Dónde se le cambia el porcentaje de Utilidad, Costo Indirecto de Obra, Costo Financiamiento, etc.)' style={{textAlign:"justify"}}>
                                En la parte inferior de la ventana de los <b>PRECIOS UNITARIOS</b> aparecen varios botones, se le da clic en <b>CONSTANTES (K)</b>, de ahí se despliega otra ventana donde aparecen las constantes que se están utilizando y de esa ventana se le pueden ir agregando las cantidades que se requieran.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={12} headerTitle='No se pueden mandar a generar los análisis' style={{textAlign:"justify"}}>
                                Si se tienen costos en frío no será posible generar, ya que para estos deben estar <b>ANALIZADO</b>. 
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={13} headerTitle='No le aparece el PROGRAMA DE OBRA' style={{textAlign:"justify"}}>
                                Cada que realice un cambio en el presupuesto o por primera vez se va abrir el <b>PROGRAMA DE OBRA</b>, es necesario realizar el proceso completo de <b>CÁLCULOS PRESUPUESTO</b> para que se actualicen los datos.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={14} headerTitle='Realiza un PROGRAMA DE OBRA por partida, ¿cuando ingrese el presupuesto completo le eliminara el que ya capturo?' style={{textAlign:"justify"}}>
                                La hora de agregar todo el presupuesto, se le va a modificar el PROGRAMA DE OBRA, ya que toma lo que esta cargado.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={15} headerTitle='Error a la hora de pasar de Excel a Campeón Plus Smart. No existe en la hoja de Excel columna con etiqueta descripción se cancela la importación a Excel.' style={{textAlign:"justify"}}>
                                Antes que nada hay que revisar primero que todo este bien escrito, de ahí modificar el estilo de la celda (General), si no funciona, entonces hay que guardar el archivo como <b>LIBRO DE EXCEL</b> ó <b>VERSIÓN 2003</b>
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={16} headerTitle='Se descargo el programa pero a la hora de abrirlo no lo ejecuta, solo se queda en la pantalla de inicio (El logo de Campeón Plus Smart)' style={{textAlign:"justify"}}>
                                Se le debe instalar desde <b>INSTALACPLUS</b> para instalar el programa como se debe. Primero hay que descomprimir el archivo y de ahí instalarlo.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={17} headerTitle='A la hora de querer generar un REPORTE, le aparece un letrero que dice "NO SE ENCONTRARON REGISTROS EN LA TABLA DE EXPLOSIÓN DE INSUMOS".' style={{textAlign:"justify"}}>
                                Este problema se soluciona dándole <b>RECALCULAR</b>, tienen que ser completo (<b>RECALCULAR y GENERARAR TABLA PARA EXPLOSION DE INSUMOS</b> o <b>SUPERTABLA</b>).
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={18} headerTitle='¿Cómo pasar de Excel a Campeón Plus Smart?' style={{textAlign:"justify"}}>
                                Se debe revisar el formato que se encuentra en la página web <b>www.campeonplus.com.mx</b>, después te vas a <b>ARCHIVO</b>, <b>IMPORTAR</b> y de ahí se le da <b>EXCEL FORMATO ESTÁNDAR</b>, de ahí se busca el archivo que se quiere importar y ya se le da en la <b>PALOMITA</b> y con eso queda cargado el proyecto.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={19} headerTitle='¿Cómo realizar una COPIA de una TARJETA de Precios Unitarios? Ya que ambas tienen los mismos materiales.' style={{textAlign:"justify"}}>
                                En <b>PRECIOS UNITARIOS</b>, se da de alta una <b>NUEVA TARJETA</b>, se le agrega el código y en los iconos de la parte inferior se le da clic al segundo que esta de izquierda a derecha, aquí se busca concepto que se quiere copiar, ya sea de otro presupuesto o del mismo y se le da en la <b>PALOMITA</b> y con eso se integra una copia de la <b>TARJETA</b>, solo es cuestión de capturar la descripción del concepto y las modificaciones que se le quieran realizar.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={20} headerTitle='No entra al Campeón SMART' style={{textAlign:"justify"}}>
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
                            </MDBAccordionItem>
                        </MDBAccordion>
                    </main>
                </div>
            </div>
        </>
    )
}