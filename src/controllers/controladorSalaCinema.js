import {
    pintarSillas
}
from "../helper/pintarSillas.js"



let asientos=[
    [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}],
    [{id:"a4",estado:0},{id:"b5",estado:0},{id:"c4",estado:0},{id:"d4",estado:0}]
]

let asientoFactura=document.getElementById("sillas")
let imptotal=document.getElementById("Total")
//PINTAR DESDE JS MI SALA DE CINE
let cinema=document.getElementById("salacinema")
//recorrer los asientos y aplicar traversig
pintarSillas(asientos,cinema)

//evento de clic en la sala de cine
let reservar= document.getElementById("boton")
//let pintar= document.getElementById("boton")

const prueba = (silla2,Total2)=>{
    //console.log(Total2)
    //console.log (sillas2.lenght)
    let fila=document.createElement("div")
        fila.classList.add("row")
    silla2.forEach(function(silla2){
        
        let columna=document.createElement("div")
            columna.classList.add("col-1")
            silla=document.createElement("p")
            silla.classList.add("fw-bold")
            silla.textContent= silla2
            columna.appendChild(silla)
            fila.appendChild(columna)
            })
            asientoFactura.appendChild(fila)

            let Total=Total2*2000
            let total=document.createElement("p")
            total.textContent=Total
            imptotal.appendChild(total)
            console.log(Total)
            
}


let silla=[]
 cinema.addEventListener("click",function (e) {
    if(e.target.tagName=="IMG"){
        let idAsientoSeleccionado= e.target.id
         asientos.forEach(function (hilera) {
            hilera.forEach(function (asiento) {
                if(asiento.id==idAsientoSeleccionado)
                {
                    //encontré el asiento donde el usuario se quiere sentar
                    if (asiento.estado==0) {
                        asiento.estado=1
                        e.target.src="../../assets/img/cinema-chair (2).png"
                        
                    } else if(asiento.estado==1) {
                        asiento.estado=0
                        e.target.src="../../assets/img/cinema-chair.png"
                        }
                }
            })
        })
        silla=[]
        let Total
    asientos.forEach(function (hilera) {
        hilera.forEach(function (asiento) {
            if(asiento.estado==1){
                silla.push(asiento.id)
                reservar.addEventListener("click", function(){
                    if(asiento.estado==1) {
                                    Total=silla.length
                                    asiento.estado=2
                                    e.target.src="../../assets/img/cinema-red.png"
                                    prueba(silla,Total)
                                }
                })
            }
        })
    })
    }
    
    
})


    
    

