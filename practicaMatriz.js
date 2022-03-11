monto=0;
cantCuotas=0;
interes=0;
nombre= "";

let arrayPrestamos = [{nombre:nombre,monto:monto,cantCuotas:cantCuotas,interes:interes}];
arrayPrestamos.splice(0,3)

var prestamos = document.getElementById('prestamos');

class Prestamo {
    constructor(nombre, monto, cantCuotas, interes) {
        this.monto = monto;
        this.cantCuotas = cantCuotas;
        this.interes = interes;
        this.nombre = nombre;
    }

}


function crearPrestamo() {
    let nombre = prompt("Ingresa tu nombre").toLocaleLowerCase();
    let monto = parseInt(prompt("Ingrese la cantidad de pesos a pedir"));
    let cantCuotas = parseInt(prompt("Indique en cuantas cuotas desea realizarlo"));
    let interes = parseInt(prompt("Ingrese los intereses"));
    let prestamo = new Prestamo(nombre, monto, cantCuotas, interes);  
    arrayPrestamos.push(prestamo);
    
}


function mostrarPrestamos() {
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayPrestamos.length; i++) {
        arrayPrestamos.sort((a, b) => {         
            if(a.monto < b.monto) {
                return -1;
        }
        
            if(a.monto > b.monto) {
                return 1;
        }
        
                return 0;
            });
    prestamos.innerHTML = prestamos.innerHTML +
            '<tr>' +
                '<td>' + arrayPrestamos[i].nombre + '</td>' +
                '<td>' + arrayPrestamos[i].monto + '</td>' +
                '<td>' + arrayPrestamos[i].cantCuotas + '</td>' +
                '<td>' + arrayPrestamos[i].interes + '</td>' +
            '</tr>';             
    }   
    
}

function ordenarPorId() {
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayPrestamos.length; i++) {
        arrayPrestamos.sort((a, b) => {         
            if(a.nombre < b.nombre) {
                return -1;
        }
            if(a.nombre > b.nombre) {
                return 1;
        }
                return 0;
            });
    prestamos.innerHTML = prestamos.innerHTML +
            '<tr>' +
                '<td>' + ""+'</td>' +
                '<td>' + arrayPrestamos[i].nombre + '</td>' +
                '<td>' +""+ '</td>' +
                '<td>' + arrayPrestamos[i].monto + '</td>' +
                '<td>' +""+ '</td>' +
                '<td>' + arrayPrestamos[i].cantCuotas + '</td>' +
                '<td>' +""+ '</td>' +
                '<td>' + arrayPrestamos[i].interes + '</td>' +
                '<td>' +""+ '</td>' +
            '</tr>';             
    }   
}
function calcularPrestamos() {
    let personaBuscada = prompt("Ingrese el nombre de la persona");
    let buscador = arrayPrestamos.map(nombre => nombre.nombre)
    let index = buscador.indexOf(personaBuscada) 
    let interesCuota = () => (arrayPrestamos[index].monto / arrayPrestamos[index].cantCuotas) * (arrayPrestamos[index].interes / 100 + 1);
    let interesTotal = () => (arrayPrestamos[index].monto * (arrayPrestamos[index].interes / 100 + 1)) - arrayPrestamos[index].monto;

    alert(`el interes total es ${arrayPrestamos[index].interes}%\nel valor por cuota es de $${interesCuota(interes)}\nel monto final a devolver es de $${interesTotal(interesTotal)+arrayPrestamos[index].monto} pesos.`)
    console.log(`el interes total es ${arrayPrestamos[index].interes}%`);
    console.log(`el valor por cuota es ${interesCuota(interes)}`);
    console.log(`el interes del monto es de $${interesTotal(interesTotal)+arrayPrestamos[index].monto} pesos.`);

}   

