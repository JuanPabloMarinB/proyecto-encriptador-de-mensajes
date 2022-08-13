/* Claves para Encriptar 
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/
function mostrarBotonCopiar(){
    var displayBotonCopiar = document.getElementById("copiar-texto-revelado");
    if (displayBotonCopiar.style.display === 'none') {        
    } else {
        displayBotonCopiar.style.display = 'block'
    }
}
function ocultarImagenDerecha() {
    var displayImagenDerecha = document.getElementById('imagen-derecha');
    if (displayImagenDerecha.style.display === 'block') {  
      } else {
        displayImagenDerecha.style.display = 'none';
      }
    }

function ocultarTituloDerecha() {
    var displayTituloDerecha = document.getElementById('titulo-derecha');
    if (displayTituloDerecha.style.display === 'block') {  
        } else {
            displayTituloDerecha.style.display = 'none';
        }
    }
function ocultarParrafoDerecha() {
    var displayParrafoDerecha = document.getElementById('parrafo-derecha');
    if (displayParrafoDerecha.style.display === 'block') {  
        } else {
            displayParrafoDerecha.style.display = 'none';
        }
    }
function cambiarColorTituloDerecha() {
    var colorTituloDerecha = document.getElementById('titulo-derecha');
    if (colorTituloDerecha.style.color === 'tomato') {  
        colorTituloDerecha.style.color = '#343A40'
        } else {
            colorTituloDerecha.style.color = 'tomato';
        }
    }

function revelarTexto(){
var displayMensajeRevelado = document.getElementById('mensaje-revelado');
if (displayMensajeRevelado.style.display === 'none') {
} else {
    displayMensajeRevelado.style.display = 'block';
}
}

function encriptar(){
        var mensajePorEncriptar = document.getElementById("input").value;
        mensajePorEncriptar = mensajePorEncriptar.replace(/e/g, "enter");
        mensajePorEncriptar = mensajePorEncriptar.replace(/i/g, "imes");
        mensajePorEncriptar = mensajePorEncriptar.replace(/a/g, "ai");
        mensajePorEncriptar = mensajePorEncriptar.replace(/o/g, "ober");
        mensajePorEncriptar = mensajePorEncriptar.replace(/u/g, "ufat");
        document.getElementById("mensaje-revelado").innerHTML = mensajePorEncriptar;
}

function desencriptar(){
        var mensajePorDesencriptar = document.getElementById("input").value;
        mensajePorDesencriptar = mensajePorDesencriptar.replace(/enter/g, "e");
        mensajePorDesencriptar = mensajePorDesencriptar.replace(/imes/g, "i");
        mensajePorDesencriptar = mensajePorDesencriptar.replace(/ai/g, "a");
        mensajePorDesencriptar = mensajePorDesencriptar.replace(/ober/g, "o");
        mensajePorDesencriptar = mensajePorDesencriptar.replace(/ufat/g, "u");
        document.getElementById("mensaje-revelado").innerHTML = mensajePorDesencriptar;
}

function copiar(){
    var mensajeCopiado = document.getElementById('mensaje-revelado').innerHTML;
        navigator.clipboard.writeText(mensajeCopiado)
     if  (mensajeCopiado) {
        document.getElementById("copiar-texto-revelado").innerHTML = "Copiado";
        
    } else {
        document.getElementById("copiar-texto-revelado").innerHTML = "No has copiado nada";

    }
}

function encriptarMensaje(){
    if (input.value){
        encriptar();
        ocultarImagenDerecha();
        ocultarTituloDerecha();
        ocultarParrafoDerecha();
        revelarTexto();
        mostrarBotonCopiar();
    } else {
        cambiarColorTituloDerecha();
    }
    input.value = "";
    document.getElementById("copiar-texto-revelado").innerHTML = "Copiar";
}
var buttonIzq = document.getElementById("btn_encriptar");
buttonIzq.onclick = encriptarMensaje;

function desencriptarMensaje(){
    if (input.value){
        desencriptar();
        ocultarImagenDerecha()
        ocultarTituloDerecha()
        ocultarParrafoDerecha();
        revelarTexto();
        mostrarBotonCopiar();
    } else {
        cambiarColorTituloDerecha();
    }
    input.value = "";
    document.getElementById("copiar-texto-revelado").innerHTML = "Copiar";
}
var buttonDer = document.getElementById("btn_desencriptar","")
buttonDer.onclick = desencriptarMensaje;


