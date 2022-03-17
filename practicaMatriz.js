monto=0;
cantCuotas=0;
interes=0;
nombre= "";

const arrayPrestamos = [{nombre:nombre,monto:monto,cantCuotas:cantCuotas,interes:interes}];
arrayPrestamos.splice(0,3);

/*  */
const prestamos = document.getElementById('prestamos');
const resultados = document.getElementById('resultados');

/* Se crea el constructor de los prestamos */
class Prestamo {
    constructor(nombre, monto, cantCuotas, interes) {
        this.monto = monto;
        this.cantCuotas = cantCuotas;
        this.interes = interes;
        this.nombre = nombre;
    }

}

/* Se le piden las variables al usuario a travez de inputs y luego se limpian las variables */
function crearPrestamo() {
    let nombre = document.getElementById('nombre').value.toLowerCase();
    let monto = parseInt(document.getElementById('monto').value);
    let cantCuotas = parseInt(document.getElementById('cantCuotas').value);
    let interes = parseInt(document.getElementById('interes').value);
    let prestamo = new Prestamo(nombre, monto, cantCuotas, interes);  
    arrayPrestamos.push(prestamo); 
    document.getElementById('nombre').value = "";
    document.getElementById('monto').value = "";
    document.getElementById('cantCuotas').value = "";
    document.getElementById('interes').value = "";
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayPrestamos.length; i++) {
    prestamos.innerHTML = prestamos.innerHTML +
    '<tr>' +
    '<td>' + '</td>' +
        '<td>' + arrayPrestamos[i].nombre + '</td>' +
        '<td>' + '</td>' +
        '<td>' +'$'+ arrayPrestamos[i].monto + '</td>' +
        '<td>' + '</td>' +
        '<td>' + arrayPrestamos[i].cantCuotas + '</td>' +
        '<td>' + '</td>' +
        '<td>' + arrayPrestamos[i].interes +'%'+ '</td>' +
        '<td>' + '</td>' +
    '</tr>';       
}
}

/* Funcion para ordenenar los montos de mayor a menor e imprimir la busqueda en el html */
function mostrarPrestamos() {
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayPrestamos.length; i++) {
        arrayPrestamos.sort((a, b) => {         
            if(a.monto > b.monto) {
                return -1;
        }
        
            if(a.monto < b.monto) {
                return 1;
        }
        
                return 0;
            });
    prestamos.innerHTML = prestamos.innerHTML +
            '<tr>' +
            '<td>' + '</td>' +
                '<td>' + arrayPrestamos[i].nombre + '</td>' +
                '<td>' + '</td>' +
                '<td>' +'$'+ arrayPrestamos[i].monto + '</td>' +
                '<td>' + '</td>' +
                '<td>' + arrayPrestamos[i].cantCuotas + '</td>' +
                '<td>' + '</td>' +
                '<td>' + arrayPrestamos[i].interes +'%'+ '</td>' +
                '<td>' + '</td>' +
            '</tr>';             
    }   
    
}
/* Funcion para ordenenar los nombres de a-z e imprimir la busqueda en el html */
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
                '<td>' + '</td>' +
                '<td>' + arrayPrestamos[i].nombre + '</td>' +
                '<td>' + '</td>' +
                '<td>' +'$'+ arrayPrestamos[i].monto + '</td>' +
                '<td>' + '</td>' +
                '<td>' + arrayPrestamos[i].cantCuotas + '</td>' +
                '<td>' + '</td>' +
                '<td>' + arrayPrestamos[i].interes+'%' + '</td>' +
                '<td>' + '</td>' +
            '</tr>';             
    }   
}

/* Funcion que busca los datos de la persona */
function calcularPrestamos() {
    /* Se recorre el array para conseguir el index del nombre ingresado */
    let personaBuscada = document.getElementById('personaBuscada').value.toLowerCase();
    let buscador = arrayPrestamos.map(nombre => nombre.nombre);
    let index = buscador.indexOf(personaBuscada);
    /* Se realizan los calculos con el index encontrado */
    let interesCuota = () => (arrayPrestamos[index].monto / arrayPrestamos[index].cantCuotas) * (arrayPrestamos[index].interes / 100 + 1);
    let interesTotal = () => (arrayPrestamos[index].monto * (arrayPrestamos[index].interes / 100 + 1)) - arrayPrestamos[index].monto;
    /* Se limpia e imprime en html la informacion */
    resultados.innerHTML = ''; 
    resultados.innerHTML =`   <hr/>el interes total de ${arrayPrestamos[index].nombre} es de ${arrayPrestamos[index].interes}%<br><br>el valor por cuota es de $${interesCuota(interes)} pesos.<br><br>el monto final a devolver es de $${interesTotal(interesTotal)+arrayPrestamos[index].monto} pesos.   <hr/>`;
    document.getElementById('personaBuscada').value = "";
}   

