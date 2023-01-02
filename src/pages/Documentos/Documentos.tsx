import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import './Documentos.css';
import TablaDocumentos from "./TablaDocumentos";
import TablaDocumentosInteres from "./TablaDocumentosInteres";

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel2-${index}`}
          aria-labelledby={`simple-tab2-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
}

function a11yProps(index: number) {
    return {
        id: `simple2-tab-${index}`,
        'aria-controls': `simple-tabpanel2-${index}`,
    };
}

export default function Documentos() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return(
        <>
            <Header/>
            <br />
            <div className="contenedor">
                <div className="contenedor contenido-principal">
                    <main className="carta">
                        <h3>Documentos</h3>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="CAMPEÓN PLUS SMART" {...a11yProps(0)} />
                                <Tab label="ARCHIVOS DE INTERES" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <TablaDocumentos/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <TablaDocumentosInteres/>
                            </TabPanel>
                        </Box>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    )
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}