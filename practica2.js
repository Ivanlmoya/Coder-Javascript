let bisiesto = 0;
let a = bisiesto / 4;
let b = bisiesto / 400;
let puntaje = 0;

alert("Bienvenido al juego de adivinar el año bisiesto \n\nescriba salir para terminar el juego");

do{
    bisiesto = prompt("Ingrese un año :");
    a = bisiesto / 4;
    b = bisiesto / 400;
    if (a % 1 == 0) {
        puntaje++;
        if (b % 1 == 0) {
            console.log("Es bisiesto y secular");
            puntaje++;
        } else {
            console.log("Es bisiesto");
        }
    } else {
        console.log("No es bisiesto");
        puntaje--;
    }
}while(bisiesto != "salir");
puntaje++;
alert(`Su puntaje fue de ${puntaje} , si quiere jugar nuevamente presione F5`);

/* --------------------------------------------- */
