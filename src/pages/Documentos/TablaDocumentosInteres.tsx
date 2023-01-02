import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import cloud from '../../assets/images/cloud.png';

import './Documentos.css';

export default function TablaDocumentosInteres() {

    function descargarArchivo(id: any) {
        if (id == 1) {
            fetch('ley-del-seguro-social.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'ley-del-seguro-social.pdf';
                    alink.click();
                })
            })
        }else if(id == 2){
            fetch('ley-federal-del-trabajo.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'ley-federal-del-trabajo.pdf';
                    alink.click();
                })
            })
        }else if(id == 3){
            fetch('ley-de-obras-públicas.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'ley-de-obras-públicas.pdf';
                    alink.click();
                })
            })
        }else if(id == 4){
            fetch('reglamento-de-la-ley-de-obras-públicas.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'reglamento-de-la-ley-de-obras-públicas.pdf';
                    alink.click();
                })
            })
         }else if(id == 5){
            fetch('reglamento-imss-construcción.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'reglamento-imss-construcción.pdf';
                    alink.click();
                })
            })
        }
    }

    return(
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" >
                    <TableHead style={{backgroundColor: "rgba(250, 250, 250, 0.7)"}}>
                        <TableRow>
                            <TableCell>
                                Nombre
                            </TableCell>
                            <TableCell>
                                Descargar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                LEY DEL SEGURO SOCIAL.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("1")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                LEY FEDERAL DEL TRABAJO.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("2")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                LEY DE OBRAS PÚBLICAS.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("3")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                REGLAMENTO DE LA LEY DE OBRAS PÚBLICAS.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("4")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                REGLAMENTO IMSS CONSTRUCCIÓN.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("5")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}