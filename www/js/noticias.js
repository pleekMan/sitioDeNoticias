// Tenemos varias funciones armadas que podemos usar:

// obtenerNoticias(): toma todas las noticias de la página
//
// ocultarNoticia(noticia): oculta la noticia pasada como parámetro
// mostrarNoticia(noticia): muestra la noticia pasada como parámetro
//
// contienePalabra(noticia, palabra): devuelve true si la noticia tiene la palabra
// pasada como parámetro
//
// recortarTexto(noticia, cantidadPalabras): recorta el texto de la noticia para
// que su largo sea cantidadPalabras


// -------------------------- LLAMADAS DE FUNCIONES, PEDIDAS PARA EVALUAR
console.log("------------------------");
console.log("------------------------");
console.log("------------------------");


var noticias = obtenerNoticias();
console.log(noticias);

var laArgentinidad = ["argentina","argentino","mate"];
resaltarNoticiasQueContengan(laArgentinidad, "rgb(75, 236, 246)");

var laRobotica = ["Robotica", "robots"];
resaltarNoticiasQueContengan(laRobotica, "rgb(106, 247, 163)");

var elGoogle = ["google"];
ocultarNoticiasQueContengan(elGoogle);

//recortarNoticias(20);


// Esta función está de muestra para ver como funciona el while
// Sólo se está recorriendo las noticias y cambiándole el color
function marcarNoticiasConWhile(){
  var contador = 0;
  // Recorre la variable noticias, iluminando en la que se encuentra en cada momento
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, "rgb(188, 164, 213)");
    contador++; //contador = contador + 1
  }
}

// Ahora lo mismo pero con un for para ver cuales son las diferencias con el while
function marcarNoticiasConFor(){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
}

// Esta la tienen que hacer, puede ser con while o for

function resaltarNoticiasQueContengan(palabra, color){

   var variaciones = variacionesDeMayusculas(palabra);

   for (var i = 0; i < noticias.length; i++) {
      for (var j = 0; j < variaciones.length; j++) {
         if(contienePalabra(noticias[i],variaciones[j])){
            cambiarColor(noticias[i],color);
            break;
         }
      }

   }
   console.log("Resaltar Done");
}

// Si la noticia incluye la palabra, la ocultamos.
function ocultarNoticiasQueContengan(palabra){

   var variaciones = variacionesDeMayusculas(palabra);

   for (var i = 0; i < noticias.length; i++) {
      for (var j = 0; j < variaciones.length; j++) {
         if(contienePalabra(noticias[i],variaciones[j])){
            insertarAlertaDeFiltro(noticias[i],variaciones[j]);
            ocultarNoticia(noticias[i]);
            break;
         }
      }
   }
   console.log("OCULTAR Done");
}

function recortarNoticias(cantPalabras){
   for (var i = 0; i < noticias.length; i++) {
         recortarTexto(noticias[i],cantPalabras);
   }
   console.log("RECORTE Done");
}

// Acá abajo podés poner las funciones que quieras usar
//marcarNoticiasConWhile()
//marcarNoticiasConFor()
// ...

function variacionesDeMayusculas(palabras){
   var todasPalabrasTodasVariaciones = [];
   for (var i = 0; i < palabras.length; i++) {
      todasPalabrasTodasVariaciones.push(palabras[i].toLowerCase());
      todasPalabrasTodasVariaciones.push(palabras[i].toUpperCase());
      var letraMayus = palabras[i].toUpperCase().charAt(0) + palabras[i].toLowerCase().slice(1);
      todasPalabrasTodasVariaciones.push(letraMayus);
   }
   console.log(todasPalabrasTodasVariaciones);
   return todasPalabrasTodasVariaciones;
}

function insertarAlertaDeFiltro(noticia, palabra){
   var alertaDeFiltro = '<div style="background-color:#ff6b6b; color:rgb(255, 255, 255);font-size:17px; text-align:center; margin:20px"><b>NUESTROS CHIMPANCES-BOTS HAN DECIDIDO FILTRAR ESTA NOTICIA PARA TU, EJEM, BENEFICIO... NO <em>' + palabra + '</em> FOR YOU..!!</b></div>'

   noticia.insertAdjacentHTML('beforebegin',alertaDeFiltro);
}
