const search = document.getElementById('buscador')
const buttomSearch = document.getElementById('buscar') 
let numeroBuscador = 1
let activador= false;
let click = 0
let numerosdeclick = 0



function contador(){
            click ++; 
        
}

async function buscando (numeroBuscador){
    let palabraClave = search.value
    console.log("palabraclave= "+palabraClave)
    await fetch(`https://api.unsplash.com/search/photos/?page=${numeroBuscador};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk&query=${palabraClave}`)
    .then(resultado => resultado.json())
    .then(imagenbuscada => 
        {
        // if(activador == false){
        //     contenedorFotos.innerHTML = ""
        //     activador = true
        //     altura=200
        //     numeroBuscador = 1
        //     console.log("activador= "+activador)
        //     console.log("numerodeclick= "+numerosdeclick)
        //     console.log("click= "+ click)
            
        // }
         if(click > numerosdeclick){
            contenedorFotos.innerHTML = ""
            activador = true
           numerosdeclick++
           numeroBuscador = 1
           altura=200
            // console.log("numerodeclick es mas chico= "+numerosdeclick)
            // console.log("click es mas grande= "+ click)
         }
       
    for (let imagenesbuscadas of imagenbuscada.results){
        let src = imagenesbuscadas.urls.small
        let ubicacion = imagenesbuscadas.user.location
        let megusta = imagenesbuscadas.likes
        let descripcion =imagenesbuscadas.alt_description
        let fecha = imagenesbuscadas.created_at
         contenedorFotos.innerHTML +=
         `<div class = "contenedorpadre">
         <div class="contenedor">
             <img src="${src}" alt="">
         </div>
         <div>
             <p> Ubicacion : ${ubicacion}</p>
             <p> Likes: ${megusta}</p>
             <p> Descripcion: ${descripcion}</p>
             <p> Fecha: ${fecha}</p>
         </div>
     </div>    
     `
    
         }})
         
}
buttomSearch.addEventListener('click', buscando);
buttomSearch.addEventListener('click', contador);

let altura = 200;
let numero = 1;
function miFuncion() {
   let scrolltop = document.documentElement.scrollTop
   if(scrolltop>altura & activador == true){
    altura += 500;
    numeroBuscador++
    console.log(altura)
    console.log(scrolltop)
    buscando(numeroBuscador)
   }else if (scrolltop>altura & activador == false){
    altura += 500;
    numero++
    obtener(numero)
     console.log("altura= "+altura)
    console.log("scrolltop= "+scrolltop)
    // console.log(scrolltop)
}

    
  
}

window.addEventListener('scroll', miFuncion);

  async function obtener(numero) {
  await fetch(`https://api.unsplash.com/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk`)
 .then(respuesta=>respuesta.json())
 .then(datos => mostrarImagenes(datos))
//  console.log("se ejecuto obtener")
 }
 
 obtener(numero)

 const contenedorFotos = document.getElementById('photos') 
  const mostrarImagenes = (imagen) => {
//    console.log(imagen)
   // console.log(imagen[0].created_at)
    //console.log(imagen[0].likes)
    //console.log(imagen[0].user.location)
   // console.log(imagen[0].alt_description)
        for (let imagenes of imagen){
            let src = imagenes.urls.small
            let ubicacion = imagenes.user.location
            let megusta = imagenes.likes
            let descripcion =imagenes.alt_description
            let fecha = imagenes.created_at
             contenedorFotos.innerHTML +=
             `<div class = "contenedorpadre">
                <div class="contenedor">
                    <img src="${src}" alt="">
                </div>
                <div>
                    <p> Ubicacion : ${ubicacion}</p>
                    <p> Likes: ${megusta}</p>
                    <p> Descripcion: ${descripcion}</p>
                    <p> Fecha: ${fecha}</p>
                </div>
            </div>    
            `
        }
     }
 


