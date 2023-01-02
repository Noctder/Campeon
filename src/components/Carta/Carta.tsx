import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

import linea2 from '../../assets/images/linea2.jpg';
import campeonblack from '../../assets/images/campeon_black.png';
import facil from '../../assets/images/letrasfacil.png';
import QueEs from '../../assets/images/que es.png';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CreateIcon from '@mui/icons-material/Create';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
 
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function Carta() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',
      };

    return (
        <Box
            sx={{bgcolor: 'background.paper', display: 'flex'}} className="icons_Text contenedor contenido-principal"
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="icon tabs"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab {...a11yProps(0)} icon={<PhoneAndroidIcon />}  sx={{ ...commonStyles,borderRadius: '50%'}} className="rounded-circle" />                
                <img src={linea2} style={{width: "10%"}}/>
                <Tab {...a11yProps(1)} icon={<CreateIcon />} sx={{ ...commonStyles, borderRadius: '50%'}} className="rounded-circle"/>                
                <img src={linea2} style={{width: "10%"}}/>
                <Tab {...a11yProps(2)} icon={<BusinessCenterIcon />} sx={{ ...commonStyles,borderRadius: '50%'}} className="rounded-circle"/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <img src={campeonblack} className="campeonblack"/>
                <br />
                <img src={facil} className="facil"/>
                <br /><br />
                <p style={{textAlign:"justify"}}>
                Campeón Plus es un Sistema para la administración de proyectos que ha logrado solucionar de forma integral las necesidades de la industria contemplando la Presupuestación, programación y control.
                </p>
                <br />
                <p style={{textAlign:"justify"}}>
                Este software es de aplicación principalmente a la industria de la construcción, pero puede adaptarse a las necesidades de otros sectores.Campeón Plus es un Sistema para la administración de proyectos que ha logrado solucionar de forma integral las necesidades de la industria contemplando la Presupuestación, programación y control.
                </p>            
            </TabPanel>
            <TabPanel value={value} index={2}>
                <img src={campeonblack} className="campeonblack"/>
                <br />
                <img src={facil} className="facil"/>
                <br /><br />
                <p style={{textAlign:"justify"}}>
                Campeón plus smart, siendo este nuestro sistema más nuevo en el cual, nos preocupamos de que el sistema pudiera:
                </p>
                <br />
                <p style={{textAlign:"justify"}}>
                • Reducir el tiempo de Presupuestación y programación de un proyecto para ser presentado a concurso.
                </p>  
                <br />
                <p style={{textAlign:"justify"}}>
                • Ajustar todos los formatos a la Ley de Obras Públicas y el Reglamento vigentes para evitar descalificaciones.
                </p>
                <br />
                <p style={{textAlign:"justify"}}>
                • Hacer coincidir todos los resultados para que éstos cuadren hasta en los centavos.
                </p>  
                <br />
                <p style={{textAlign:"justify"}}>
                • Y, finalmente, propiciar que lo que usted vea sea exactamente tal y como va a ser impreso o exportado a Excel® o PDF®.
                </p>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <img src={campeonblack} className="campeonblack"/>
                <br />
                <img src={facil} className="facil"/>
                <br /><br />
                <p style={{textAlign:"justify"}}>
                Esto sin demérito de que el sistema sea fácil de uso, intuitivo y rápido. Metas difíciles, que usted habrá de poner a prueba, pues tal y como lo hemos valorado en nuestros laboratorios- el sistema Campeón Plus Smart ahorra tiempo y asegura la calidad del trabajo muy por encima de lo que otros productos pueden hacer.
                </p>
            </TabPanel>
            <div>
                <img src={QueEs}/>
                <iframe src="//www.youtube.com/embed/mOMOQlPweqg" width={420} height={315} allowFullScreen className='video_iframe'></iframe>
            </div>
        </Box>
    );
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}