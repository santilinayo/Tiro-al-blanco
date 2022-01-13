var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var radio = 10;
var xAleatorio;
var yAleatorio;





pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

function diseniarCircunferencia(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpiar() {
    pincel.clearRect(0, 0, 600, 400);
}


var x = 0

function actualizarPantalla() {
    limpiar();
    diseniarCircunferencia(x, 50, 10);
    x++

}

function diseniarObjetivo(x, y) {
    diseniarCircunferencia(x, y, radio + 20, "red");
    diseniarCircunferencia(x, y, radio + 10, "white");
    diseniarCircunferencia(x, y, radio, "red");
}


function moverObjetivo(maximo) {
    return Math.floor(Math.random() * maximo);
}



function actualizarPantalla() {
    limpiar();
    xAleatorio = moverObjetivo(600)
    yAleatorio = moverObjetivo(400)
    diseniarObjetivo(xAleatorio, yAleatorio);
    x++

}
setInterval(actualizarPantalla,900)


function disparar(evento) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if ((x < xAleatorio + radio) &&
        (x > xAleatorio - radio) &&
        (y < yAleatorio + radio) &&
        (y > yAleatorio - radio) ) {
        alert("tiro certero");
    }
}


pantalla.onclick = disparar;


