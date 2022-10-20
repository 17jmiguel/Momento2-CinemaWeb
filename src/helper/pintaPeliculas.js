export function pintarPeliculas(peliculas){
    //recorriendo un arreglo en JS
    let fila=document.getElementById("fila")
    peliculas.forEach(function(pelicula){
     //traversing (crear etiquetas de html desde js)
     /*let poster=document.createElement("img")
     poster.src=pelicula.poster
     
     let nombrePelicula=document.createElement("h3")
     nombrePelicula.textContent=pelicula.nombre*/
     
     //1. creamos una columna para cada película
     let columna=document.createElement("div")
         columna.classList.add("col")
     //2.Creamos una tarjeta para cada película
     let tarjeta=document.createElement("div")
         tarjeta.classList.add("card","h-100")
     
     //3. creamos una foto para cada película
     let poster=document.createElement("img")
         poster.classList.add("card-img-top")
         poster.src=pelicula.poster
     
     //4.creamos el nombre de la película
     
     let nombre=document.createElement("h3")
         nombre.classList.add("card-title","text-center")
         nombre.textContent=pelicula.nombre
     
     //5. creamos el genero
     
     let genero=document.createElement("h4")
         genero.classList.add("card-text")
         genero.textContent="Genero: "+ pelicula.genero 
     
     //6. creamos el idioma
     
     let idioma=document.createElement("h5")
         idioma.classList.add("fw-bold")
         idioma.textContent="Idioma: "+ pelicula.idioma
     
     //7. creamos la sinopsis
     
     let sinopsis=document.createElement("p")
         sinopsis.classList.add("ric")
         sinopsis.textContent= "Sinopsis: "+ pelicula.sinopsis
     
     //8.creamos la duración
     
         let duración=document.createElement("h6")
         duración.classList.add("fw-blod")
         duración.textContent= "Duración: "+ pelicula.duración+ " m"
     
     //9.creamos clasificacion
     
         let clasificacion=document.createElement("p")
         clasificacion.classList.add("ffff")
         clasificacion.textContent="Clasificación: "+ pelicula.clasificacion
     
     //10.creamos director
     let director=document.createElement("h6")
         director.classList.add("f")
         director.textContent="Director: " +pelicula.director
     
     //11. creamos actores
     
     let actores=document.createElement("h6")
         actores.classList.add("w")
         actores.textContent="Reparto: "+ pelicula.actores
     
     //12. salto de linea
     
     let salto=document.createElement("br")
         salto.classList.add()
         salto.textContent=""
     
     //Padres e hijos
     /*fila.appendChild(poster)
     fila.appendChild(nombrePelicula)*/
         
         tarjeta.appendChild(poster)
         tarjeta.appendChild(nombre)
         tarjeta.appendChild(genero)
         tarjeta.appendChild(idioma)
         tarjeta.appendChild(duración)
         tarjeta.appendChild(clasificacion)
         tarjeta.appendChild(director)
         tarjeta.appendChild(actores)
         tarjeta.appendChild(salto)
         tarjeta.appendChild(sinopsis)
         columna.appendChild(tarjeta)
         fila.appendChild(columna)
     })
}
