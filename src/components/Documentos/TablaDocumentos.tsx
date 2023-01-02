import {Table } from "react-bootstrap";
import cloud from '../../assets/images/cloud.png';

import './Documentos.css';

export default function TablaDocumentos() {
    return(
        <>
            <Table responsive>
                <thead style={{backgroundColor: "rgba(250, 250, 250, 0.7)"}}>
                    <tr>
                        <th style={{textAlign: "left"}}>Nombre</th>
                        <th>Descargar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">1 CURSO EN LINEA CAMPEÓN PLUS SMART.pdf</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART MANUAL CAMPEÓN PLUS.PDF</td>
                        <td>
                            <img src={cloud} alt="Logo" className="cursor"/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">8 c-smart-configuración-bases-de-datos_cps.pdf</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">9 c-smart-bases-de-datos-en-servidor-de-red.pdf</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART EL CÁLCULO DEL COSTO FINANCIERO.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART CONJUNTO DE INSUMOS CAMPEÓN PLUS SMART.JPG</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART EJEMPLO CORTO DE PRESUPUESTO PARA IMPORTAR.XLSX</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART IMPORTACIÓN DE EXCEL_V3 REVISADO.DOCX</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART IMPORTACIÓN DE C8 A SMART_V1.DOCX</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART INSTALACIÓN.ABC2011.MSW.20121114.01.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART SQLDETACH_V1 CON INFORMACIÓN DE DESCARGA.DOCX</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">17 c-smart-sqldetach_v2-sin-información-de-descarga.pdf</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C+SMART PROGRAMA DE OBRA - CTG.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">19 c-smart-conceptual-programa-de-obra.pdf</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">29 c-smart-cálculo-de-indirectos.pdf</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">C-SMART-EL-CÁLCULO-DEL-COSTO-FINANCIERO.pdf</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}