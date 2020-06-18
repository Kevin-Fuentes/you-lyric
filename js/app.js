import {Api} from './api.js'
import * as UI from './interfaz.js'

UI.formularioBuscar.addEventListener('submit',(e)=>{
e.preventDefault()
const artista = document.querySelector('#artista').value
const cancion = document.querySelector('#cancion').value

if(artista.trim() && cancion.trim()){
const api = new Api(artista,cancion)
api.consultarApi().then(data=>{

    const cancionT = data.resultado.lyrics

    if(cancionT){
    UI.divResultado.innerHTML = cancionT

    }else{
     UI.divMensajes.innerHTML='Error...La cancion que intentas Buscar no Fue Encontrada'
     UI.divMensajes.classList.add('error')

     setTimeout(() => {
          UI.divMensajes.innerHTML=''
          UI.divMensajes.classList.remove('error')
          UI.divbuscar.reset()
     },3000);
    }
    
})
}else{

     UI.divMensajes.innerHTML='Error...Todos los campos son obligatorios'
     UI.divMensajes.classList.add('error')

     setTimeout(() => {
          UI.divMensajes.innerHTML=''
          UI.divMensajes.classList.remove('error')
     },3000);
}
})