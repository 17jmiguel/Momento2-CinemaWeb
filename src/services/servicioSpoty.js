//consumir datos del api de spotify


//1. URI=URL+EP

const URI = "https://api.spotify.com/v1/artists/4aeIWo5CMF1uRmqgJdwkZW/top-tracks?market=US"

//2. TOKEN

const TOKEN= "Bearer BQBoaTJqb0Y9H5BkukXZ0H6_wuG5ARPDXEz_fgsbXrttuGFvpHadKrIENmdtRtooXZKF3f2tcpd_xVpgox3sHmfqfwN2zpGP7hiBuiKwk5puLkNy74v9zSv0nMXWGpqLT41DoRwMzr4kuBfeOM216jkFM5DY8X85BW6kBoUzvhWhEGM99DRUXK9wxm24JpQOXR4"

//3. Peticion

const PETICION= {
    method:"GET",
    headers:{Authorization:TOKEN}
}

let fila=document.getElementById("fila")

//4. Usamos la promesa FETCH para consumir el API

fetch(URI,PETICION)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (respuesta) {
    let canciones= respuesta.tracks
    canciones.forEach(function (cancion) {

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
        
        let audio=document.createElement("audio")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombre=document.createElement("h1")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})

.catch (function (error) {
    console.log (error)
})


