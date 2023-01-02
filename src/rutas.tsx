import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Obtener from "./pages/Obtener/Obtener";
import LeerMas from "./pages/LeerMas/LeerMas";
import Politicas from "./pages/Politicas/Politicas";
import Documentos from "./pages/Documentos/Documentos";
import FAQ from "./pages/FAQ/FAQ";

export default function rutas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/FAQ' element={<FAQ/>}></Route>
                <Route path='/Documentos' element={<Documentos/>}></Route>
                <Route path='/Politicas' element={<Politicas/>}></Route>
                <Route path='/LeerMas' element={<LeerMas/>}></Route>
                <Route path='/Obtener' element={<Obtener/>}></Route>

                <Route path='/' element={<Menu/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}