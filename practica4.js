do {
    valor = prompt("Ingrese una tabla de multiplicar : (1-100)");
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

