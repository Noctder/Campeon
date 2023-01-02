import { Table } from "react-bootstrap";
import cloud from '../../assets/images/cloud.png';

import './Documentos.css';

export default function TablaDocumentosInteres() {
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
                        <td style={{textAlign: "left"}} className="text">LEY DEL SEGURO SOCIAL.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">LEY FEDERAL DEL TRABAJO.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">LEY DE OBRAS PÚBLICAS.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">REGLAMENTO DE LA LEY DE OBRAS PÚBLICAS.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left"}} className="text">REGLAMENTO IMSS CONSTRUCCIÓN.PDF</td>
                        <td><img src={cloud} alt="Logo" className="cursor"/></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}