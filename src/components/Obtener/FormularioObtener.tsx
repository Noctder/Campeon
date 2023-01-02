import { Form, Formik, FormikHelpers } from "formik";
import  InputsField  from '../../utils/InputsField';
import * as Yup from "yup";
import './FormularioObtener.css';
import SelectField from "../../utils/SelectField";

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
                    console.log(values)
                    resetForm()
                }}
            >
                {formik => (
                <Form>
                    <InputsField label="Nombre y Apellido" name="name" type="text" placeholder="Nombre Completo" />
                    <br />
                    <div className="input_grid">
                        <div>
                            <InputsField label="Teléfono" name="phone" type="tel" placeholder="3121234567" />
                        </div>
                        <div>
                            <InputsField label="Correo electrónico" name="email" type="email" placeholder="micorreo.ejemplo@ejemplo.com" />
                        </div>
                    </div>
                    <br />
                    <div className="input_grid">
                        <div>
                            <SelectField label="Motivo Descarga" name="Motivo" type="select" placeholder="Fines academicos" />
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