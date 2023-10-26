
const urlsDeImagenes = [
    'imagenes/maranata.png',
    'imagenes/php.png',
    'imagenes/sql.png',
    '   imagenes/clases.png'

  ];
  
let indiceActual = 0;
  
function obtenerURLDeImagen() 
{
    const urlActual = urlsDeImagenes[indiceActual];
  
 
    indiceActual = (indiceActual + 1) % urlsDeImagenes.length;
  
    return urlActual;
}
  
function cambiarImagen() 
{
    const imagen = document.getElementById("imagen");
  
    
    const nuevaURL = obtenerURLDeImagen();
  
    imagen.style.transform = "translateX(-100%)";

    setTimeout(() => {
        imagen.src = nuevaURL;
        // Restaurar la opacidad para la próxima transición
        imagen.style.transform = "translateX(0)";
  }, 100);


}


const imagen = document.getElementById("imagen"); 

const nuevaURL = obtenerURLDeImagen();

imagen.src = nuevaURL;

setInterval(cambiarImagen, 5000); // 5000 milisegundos = 5 segundos
  
