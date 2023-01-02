import { Form, Formik} from "formik";
import  InputsField  from '../../components/InputsField';
import * as Yup from "yup";
import './FormularioObtener.css';
import SelectField from "../../components/SelectField";
import TelField from "../../components/TelField";
import MailField from "../../components/MailField";

export default function FormularioObtener() {

    const validate = Yup.object({
        name: Yup.string().required('Su nombre es requerido'),
        email: Yup.string().email('El correo no válido').required('Su nombre es requerido'),
        phone: Yup.string()
        
    })
    return(
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                }}
                validationSchema={validate}
                onSubmit={(values, {resetForm}) => {
                    resetForm()
                }}
            >
                {formik => (
                <Form>
                    <InputsField label="Nombre y Apellido" name="name" placeholder="Nombre Completo" />
                    <br />
                    <div className="input_grid">
                        <div>
                            <TelField label="Teléfono" name="phone" placeholder="3121234567" />
                        </div>
                        <div>
                            <MailField label="Correo electrónico" name="email" placeholder="micorreo.ejemplo@ejemplo.com"/>
                        </div>
                    </div>
                    <br />
                    <div className="input_grid">
                        <div>
                            <SelectField label="Motivo Descarga" defaultValue="Fines_Academicos"/>
                        </div>
                        <div className="alinear-derecha">
                            <button type="submit" className="boton_enviar">Enviar Enlace y Claves</button>
                        </div>
                    </div>
                    
                </Form>     
                )}
            </Formik>
        </>
    )
}