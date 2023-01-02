import { Tab, Tabs } from "react-bootstrap";
import Header from "../../utils/Header";

import './Documentos.css';
import TablaDocumentos from "./TablaDocumentos";
import TablaDocumentosInteres from "./TablaDocumentosInteres";

export default function Documentos() {
    return(
        <>
            <Header/>
            <br />
            <div className="contenedor">
                <div className="contenedor contenido-principal">
                    <main className="carta">
                        <h3>Documentos</h3>
                        <Tabs
                            defaultActiveKey="campeon"
                            id="uncontrolled-tab"
                            transition={false}
                            className="mb-3"
                        >
                            <Tab eventKey="campeon" title="CAMPEÓN PLUS SMART">
                                <TablaDocumentos/>
                            </Tab>
                            <Tab eventKey="archivo" title="ARCHIVOS DE INTERES">
                                <TablaDocumentosInteres/>
                            </Tab>
                        </Tabs>
                    </main>
                </div>
            </div>
        </>
    )
}