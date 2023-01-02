import uno from '../../assets/images/1.jpg';
import dos from '../../assets/images/2.jpg';
import tres from '../../assets/images/3.jpg';
import cuatro from '../../assets/images/4.jpg';
import cinco from '../../assets/images/5.jpg';
import seis from '../../assets/images/6.jpg';
import siete from '../../assets/images/7.jpg';
import ocho from '../../assets/images/8.jpg';
import nueve from '../../assets/images/9.jpg';
import diez from '../../assets/images/10.jpg';
import once from '../../assets/images/11.jpg';
import doce from '../../assets/images/12.jpg';
import trece from '../../assets/images/13.jpg';
import catorce from '../../assets/images/14.jpg';

import './Videos.css';

export default function Videos() {

    function mostrarImagen(id: any) {        
        const imagen = document.createElement('DIV');
        if (id == 1) {
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/18D5tcXkKFM" allowFullScreen ></iframe>`;
        }else if(id == 2){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/AFZS66yskeU" allowFullScreen ></iframe>`;
        }else if(id == 3){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/mOMOQlPweqg" allowFullScreen ></iframe>`;
        }else if(id == 4){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/rTnEYt406VU" allowFullScreen ></iframe>`;
        }else if(id == 5){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/ogM6G_kzdHc?list=UULQh01ZD99mJ6m8ehR1Wy_A" allowFullScreen ></iframe>`;
        }else if(id == 6){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/YHCrWCyj8Ao" allowFullScreen ></iframe>`;
        }else if(id == 7){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/COAw1JxoTUo" allowFullScreen ></iframe>`;
        }else if(id == 8){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/i30n14ou65U" allowFullScreen ></iframe>`;
        }else if(id == 9){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/0HTJynDKgGE" allowFullScreen ></iframe>`;
        }else if(id == 10){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/SS0DlQapLGQ" allowFullScreen ></iframe>`;
        }else if(id == 11){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/imNGHyd1GOk" allowFullScreen ></iframe>`;
        }else if(id == 12){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/-mhQW9yobnE?list=UULQh01ZD99mJ6m8ehR1Wy_A" allowFullScreen ></iframe>`;
        }else if(id == 13){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/mMb5rV0KYoo" allowFullScreen ></iframe>`;
        }else if(id == 14){
            imagen.innerHTML = `<iframe src="//www.youtube.com/embed/hwHr6eIqvb4" allowFullScreen ></iframe>`;
        }
        
    
        //Crear el overlay con la imagen
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick = function () {
            const body = document.querySelector('body');
            body?.classList.remove('fijar-body');
            overlay.remove();
        }
    
        //Boton para cerrar el modal
        const cerrarModal = document.createElement('P');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick = function () {
            const body = document.querySelector('body');
            body?.classList.remove('fijar-body');
            overlay.remove();
        }
        overlay.appendChild(cerrarModal);
    
        //Añadirlo al html
        const body = document.querySelector('body');
        body?.appendChild(overlay);
        body?.classList.add('fijar-body');
    }

    return (
        <section id="galeria" className="galeria"> 
            <h3>SMART PASO A PASO</h3>
            <ul id="galeria-imagenes">
                <picture onClick={() => {mostrarImagen("1")}}><img loading='lazy' src={uno} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("2")}}><img loading='lazy' src={dos} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("3")}}><img loading='lazy' src={tres} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("4")}}><img loading='lazy' src={cuatro} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("5")}}><img loading='lazy' src={cinco} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("6")}}><img loading='lazy' src={seis} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("7")}}><img loading='lazy' src={siete} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("8")}}><img loading='lazy' src={ocho} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("9")}}><img loading='lazy' src={nueve} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("10")}}><img loading='lazy' src={diez} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("11")}}><img loading='lazy' src={once} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("12")}}><img loading='lazy' src={doce} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("13")}}><img loading='lazy' src={trece} alt="imagen galeria" width={"100%"}/></picture>
                <picture onClick={() => {mostrarImagen("14")}}><img loading='lazy' src={catorce} alt="imagen galeria" width={"100%"}/></picture>
            </ul>            
        </section>
    );
}