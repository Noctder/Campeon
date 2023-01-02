import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import cloud from '../../assets/images/cloud.png';

import './Documentos.css';

export default function TablaDocumentos() {

    function descargarArchivo(id: any) {
        if (id == 1) {
            fetch('1 CURSO EN LINEA CAMPEON PLUS SMART.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = '1 CURSO EN LINEA CAMPEON PLUS SMART.pdf';
                    alink.click();
                })
            })
        }else if(id == 2){
            fetch('c-smart-manual-campeón-plus.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-manual-campeón-plus.pdf';
                    alink.click();
                })
            })
        }else if(id == 3){
            fetch('8 c-smart-configuración-bases-de-datos_cps.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = '8 c-smart-configuración-bases-de-datos_cps.pdf';
                    alink.click();
                })
            })
        }else if(id == 4){
            fetch('9c-smart-bases-de-datos-en-servidor-de-red.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'DATOS EN SERVIDOR DE RED';
                    alink.click();
                })
            })
         }else if(id == 5){
            fetch('c-smart-el-cálculo-del-costo-financiero.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-el-cálculo-del-costo-financiero.pdf';
                    alink.click();
                })
            })
        }else if(id == 6){
            fetch('c-smart-conjunto-de-insumos-campeón-plus-smart.jpg').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-conjunto-de-insumos-campeón-plus-smart.jpg';
                    alink.click();
                })
            })
        }else if(id == 7){
            fetch('c-smart-ejemplo-corto-de-presupuesto-para-importar.xlsx').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-ejemplo-corto-de-presupuesto-para-importar.xlsx';
                    alink.click();
                })
            })
        }else if(id == 8){
            fetch('c-smart-importación-de-excel_v3-revisado.docx').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-importación-de-excel_v3-revisado.docx';
                    alink.click();
                })
            })
        }else if(id == 9){
            fetch('c-smart-importación-de-c8-a-smart_v1.docx').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-importación-de-c8-a-smart_v1.docx';
                    alink.click();
                })
            })
        }else if(id == 10){
            fetch('c-smart-instalación.abc2011.msw.20121114.01.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-instalación.abc2011.msw.20121114.01.pdf';
                    alink.click();
                })
            })
        }else if(id == 11){
            fetch('c-smart-sqldetach_v1-con-información-de-descarga.docx').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-sqldetach_v1-con-información-de-descarga.docx';
                    alink.click();
                })
            })
        }else if(id == 12){
            fetch('17 c-smart-sqldetach_v2-sin-información-de-descarga.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = '17 c-smart-sqldetach_v2-sin-información-de-descarga.pdf';
                    alink.click();
                })
            })
        }else if(id == 13){
            fetch('c-smart-programa-de-obra---ctg.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-programa-de-obra---ctg.pdf';
                    alink.click();
                })
            })
        }else if(id == 14){
            fetch('19 c-smart-conceptual-programa-de-obra.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = '19 c-smart-conceptual-programa-de-obra.pdf';
                    alink.click();
                })
            })
        }else if(id == 15){
            fetch('29 c-smart-cálculo-de-indirectos.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = '29 c-smart-cálculo-de-indirectos.pdf';
                    alink.click();
                })
            })
        }else if(id == 16){
            fetch('c-smart-el-cálculo-del-costo-financiero.pdf').then(response => {
                response.blob().then(blob =>{
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'c-smart-el-cálculo-del-costo-financiero.pdf';
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
                                1 CURSO EN LINEA CAMPEÓN PLUS SMART.pdf
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
                                C+SMART MANUAL CAMPEÓN PLUS.PDF
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
                                8 c-smart-configuración-bases-de-datos_cps.pdf
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
                                9 c-smart-bases-de-datos-en-servidor-de-red.pdf
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
                                C+SMART EL CÁLCULO DEL COSTO FINANCIERO.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("5")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C+SMART CONJUNTO DE INSUMOS CAMPEÓN PLUS SMART.JPG
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("6")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C+SMART EJEMPLO CORTO DE PRESUPUESTO PARA IMPORTAR.XLSX
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("7")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C+SMART IMPORTACIÓN DE EXCEL_V3 REVISADO.DOCX
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("8")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C+SMART IMPORTACIÓN DE C8 A SMART_V1.DOCX
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("9")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C+SMART INSTALACIÓN.ABC2011.MSW.20121114.01.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("10")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C+SMART SQLDETACH_V1 CON INFORMACIÓN DE DESCARGA.DOCX
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("11")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                17 c-smart-sqldetach_v2-sin-información-de-descarga.pdf
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("12")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C+SMART PROGRAMA DE OBRA - CTG.PDF
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("13")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                19 c-smart-conceptual-programa-de-obra.pdf
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("14")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                29 c-smart-cálculo-de-indirectos.pdf
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("15")}}>
                                    <img src={cloud} alt="Logo" className="cursor"/>                                
                                </picture>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="text">
                                C-SMART-EL-CÁLCULO-DEL-COSTO-FINANCIERO.pdf
                            </TableCell>
                            <TableCell>
                                <picture onClick={() => {descargarArchivo("16")}}>
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