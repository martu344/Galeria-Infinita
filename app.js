const search = document.getElementById('buscador')
const buttomSearch = document.getElementById('buscar') 

async function buscando (){
    let palabraClave = search.value
    await fetch(`https://api.unsplash.com/search/photos/?client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk&query=${palabraClave}`)
    .then(resultado => resultado.json())
   // console.log(resultado)
    .then(imagenbuscada => 
        {
         contenedorFotos.innerHTML = ""//como hacer que se cargue y muestre antes de pasar a la sig dentro del for
    //     let imagenesde = resultado2.results[0].urls.small
    //      contenedorFotos.innerHTML +=` <img src="${imagenesde}" alt="">`
       console.log(imagenbuscada.results)
    for (let imagenesbuscadas of imagenbuscada.results){
        let src = imagenesbuscadas.urls.small
         contenedorFotos.innerHTML +=` <img src="${src}" alt="">`
    
         }})
}
buttomSearch.addEventListener('click', buscando);

let altura = 1000;
let numero = 1;
function miFuncion() {
   let scrolltop = document.documentElement.scrollTop
   if(scrolltop>altura){
    altura += 1000;
    numero++
    obtener(numero)}
    console.log(altura)
    console.log(numero)
    console.log(scrolltop)
  
}

window.addEventListener('scroll', miFuncion);

  async function obtener(numero) {
  await fetch(`https://api.unsplash.com/photos/?page=${numero};client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk`)
 .then(respuesta=>respuesta.json())
 .then(datos => mostrarImagenes(datos))
 console.log("se ejecuto obtener")
 }
 
 obtener(numero)

 const contenedorFotos = document.getElementById('photos') 
  const mostrarImagenes = (imagen) => {
   // console.log(imagen)
   // console.log(imagen[0].created_at)
    //console.log(imagen[0].likes)
    //console.log(imagen[0].user.location)
   // console.log(imagen[0].alt_description)
//      for (i = 0; i <= 10 ; i++){
//      let imagenes = imagen[i].urls.small
//  contenedorFotos.innerHTML +=` <img src="${imagenes}" alt="">`
        for (let imagenes of imagen){
            let src = imagenes.urls.small
             contenedorFotos.innerHTML +=` <img src="${src}" alt="">`
        }
     }
 


