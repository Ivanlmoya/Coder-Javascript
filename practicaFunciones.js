
function operaciones(){
    let total = parseInt(prompt("Ingrese monto solicitado"));
    let numero2 = parseInt(prompt("Ingrese cantidad de cuotas"));
    let numero3=parseInt(prompt("Ingrese interes en %"));
    let interes = (numero3) => (total /numero2 ) * (numero3/100+1);
    let interesTotal = (interesTotal) => (total * (numero3/100+1)) - total;
    alert(`el interes total es ${numero3}%\nel valor por cuota es de $${interes(numero3)}\nel monto final a devolver es de ${interesTotal()+total}`)
    console.log(`el interes total es ${numero3}%`);
    console.log(`el valor por cuota es ${interes(numero3)}`);
    console.log(`el interes del monto es ${interesTotal()}`);
}

let items = 0;
function carrito(){

    
    console.log(`tienes ${items} items en el carrito actualmente`);
}
function agregarItem(){
    items++
}
function quitarItem(){
    items--
}



function tablaMultiplicar(){
    alert("Elija las tablas de multiplicar deseadas-(1-100)")
    do {
        valor = prompt("Para dejar de ejectura el programa escriba 'salir' y mostrara en consola los resultados");
            for (i = valor; i < 100; i++) {
                console.log(`tablas de multiplicar de ${i}`);
                if(i == 69){
                    console.log("( ͡° ͜ʖ ͡°)");
                    console.log("escriba salir , para terminar");
                    break;
                }
                else{
                do{
                for (j = 1; j < 10; j++) {
                    resultado = i * j;
                    console.log(`${i} x ${j} = ${resultado}`);
                }
                }while(j<10);
                console.log("escriba salir , para terminar");
                break;
                }
            }
    }
    while (valor != "salir"); 
}

function adivinar(){
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

}

function bisiesto(){
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
}