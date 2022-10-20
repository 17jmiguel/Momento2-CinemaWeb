//Preguntando por un dato almacenado en la memoria

let datosPeliculaSeleccionada = JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculaSeleccionada)

let poster=datosPeliculaSeleccionada.poster
let clasificacion=datosPeliculaSeleccionada.clasificacion
let nombre=datosPeliculaSeleccionada.nombre
let genero=datosPeliculaSeleccionada.genero
let idioma=datosPeliculaSeleccionada.idioma  
let duracion=datosPeliculaSeleccionada.duración
let director=datosPeliculaSeleccionada.director  
let actores=datosPeliculaSeleccionada.actores
let sinopsis=datosPeliculaSeleccionada.sinopsis

//Cargando datos
let foto= document.getElementById("foto")
foto.src=poster

let resumen=document.getElementById("resumen")
resumen.textContent=sinopsis

let titulo=document.getElementById("titulo")
titulo.textContent=nombre

let direct=document.getElementById("direct")
direct.textContent=director

let gener=document.getElementById("gener")
gener.textContent=genero

let language=document.getElementById("language")
language.textContent=idioma

let duration=document.getElementById("duration")
duration.textContent=duracion

let actor=document.getElementById("actor")
actor.textContent=actores

let clasifica=document.getElementById("clasifica")
clasifica.src=clasificacion