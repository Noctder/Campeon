import Header from "../../utils/Header";
import FormularioObtener from "./FormularioObtener";

import './Obtener.css';

export default function Obtener() {
    return(
        <>
            <Header/>
            <br />
            <div className="contenedor">
                <div className="contenedor contenido-principal">
                    <main className="carta">
                        <h3>OBTENER CAMPEÓN PLUS</h3>
                        <article className="carta_obtener">
                            <p>
                            Hemos subido 1,000 números de serie que Ud. podrá descargar totalmente <span>GRATIS</span> si quiere emplear el Campeón Plus Smart X2. Cada número de serie quedará registrado al número de “cliente” (usuario) que se le asigne.
                            </p>
                            <br />
                            <p>
                            Complete el siguiente formulario. Le enviaremos un correo electronico con el enlace de descarga y claves de activación.
                            </p>
                            <br />
                        </article>
                    </main>
                    <FormularioObtener/>
                </div>
            </div>
            <br />
        </>
    )
}