import {peliculas} from '../helper/basededatos.js'

import{estrenos} from '../helper/basededatos2.js'

import{pintarPeliculas} from '../helper/pintaPeliculas.js'

//recorriendo un arreglo en JS
let fila=document.getElementById("fila")

//llamo a la funcion pintaPeliculas
pintarPeliculas(peliculas)

//detectando selección de una película
let peliculaSeleccionada={
}
fila.addEventListener("click",function(e){

 peliculaSeleccionada.poster=(e.target.parentElement.querySelector('img').src)
 peliculaSeleccionada.nombre=(e.target.parentElement.querySelector('h3').textContent)           //nombre
 peliculaSeleccionada.genero=(e.target.parentElement.querySelector('h4').textContent)           //genero
 peliculaSeleccionada.idioma=(e.target.parentElement.querySelector('h5').textContent)           //idioma
 peliculaSeleccionada.duración=(e.target.parentElement.querySelector('h6').textContent)         //duracion
 peliculaSeleccionada.clasificacion=(e.target.parentElement.querySelector('.ffff').textContent)    //clasificacion
 peliculaSeleccionada.director=(e.target.parentElement.querySelector('.f').textContent)         //director
 peliculaSeleccionada.actores=(e.target.parentElement.querySelector('.w').textContent)          //reparto
 peliculaSeleccionada.sinopsis=(e.target.parentElement.querySelector('p').textContent)          //sinopsis
 
console.log (peliculaSeleccionada)

//Llamando a la memoria del navegador

localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))

//redirecciona a otra vista
window.location.href="./src/views/ampliarInfoPelicula.html"

})


