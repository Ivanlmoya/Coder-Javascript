let adivinar = 0;
let a =Math.round( Math.random()*9 +1);
let puntaje = 0;
let vidas = 3;

console.log(a);

alert("Bienvenido al juego de adivina el numero (1-10)")

do{
    adivinar = prompt("Ingrese un Numero :");
    if (a == adivinar) {
        alert("Adivinaste +1pt")
        puntaje++
        a =Math.round( Math.random()*9 +1);
        console.log(a);
    } else {
        vidas--
        console.log(vidas);
    }
}while(vidas > 0)

alert(`Su puntaje fue de ${puntaje}`); 

