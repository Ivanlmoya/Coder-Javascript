monto=0;
cantCuotas=0;
interes=0;
nombre= "";
id=0;
tiempo = "";
/* Se declara y limpia el array */
const arrayPrestamos = [{id:id,nombre:nombre,monto:monto,cantCuotas:cantCuotas,interes:interes,tiempo:tiempo}];
arrayPrestamos.splice(0,7);

/*  Se declaran las variables que interactuan con el dom*/
const prestamos = document.getElementById('prestamos');
const resultados = document.getElementById('resultados');
const botonCrearPrestamo = document.getElementById('crearPrestamo');
const botonCalcularPrestamos = document.getElementById('calcularPrestamos');
const botonOrdenarPorId = document.getElementById('ordenarPorId');
const botonMostrarPrestamos = document.getElementById('mostrarPrestamos');
const botonOrdenarPorCuotas = document.getElementById('ordenarPorCuotas');
const botonOrdenarPorInteres = document.getElementById('ordenarPorInteres');


/* Se crean los escuchadores de evento para llamar las funciones  */
botonCrearPrestamo.onclick = () => {
    crearPrestamo();
};

botonCalcularPrestamos.onclick = () => {
    calcularPrestamos();
};

botonOrdenarPorId.onclick = () => {
    ordenarPorId();
};

botonMostrarPrestamos.onclick = () => {
    mostrarPrestamos();
};

botonOrdenarPorCuotas.onclick = () => {
    ordenarPorCuotas();
};

botonOrdenarPorInteres.onclick = () => {
    ordenarPorInteres();
};



/* Se crea el constructor de los prestamos */
class Prestamo {
    constructor(id, nombre, monto, cantCuotas, interes , tiempo) {
        this.monto = monto;
        this.cantCuotas = cantCuotas;
        this.interes = interes;
        this.nombre = nombre;
        this.id = id;
        this.tiempo = tiempo;
    }

}

/* Se le piden las variables al usuario a travez de inputs y luego se limpian las variables */
function crearPrestamo() {
    idArray()
    let nombre = document.getElementById('nombre').value.toLowerCase();
    let monto = parseInt(document.getElementById('monto').value);
    let cantCuotas = parseInt(document.getElementById('cantCuotas').value);
    let interes = parseInt(document.getElementById('interes').value);
    let id = JSON.parse(localStorage.getItem('ultimoId'));
    let tiempo = moment().format("DD/MM/YYYY");
    let prestamo = new Prestamo(id, nombre, monto, cantCuotas, interes , tiempo);  
    arrayPrestamos.push(prestamo);
    /* Se crea array para guardar info en el local storage */
    const arrayPrestamosStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos')) || [];
    arrayPrestamosStorage.push(prestamo);
    let arrayPrestamosStorageJson = JSON.stringify(arrayPrestamosStorage);
    localStorage.setItem("arrayDataPrestamos", arrayPrestamosStorageJson);

    /* Se limpian las variables y se crea las filas */
    document.getElementById('nombre').value = "";
    document.getElementById('monto').value = "";
    document.getElementById('cantCuotas').value = "";
    document.getElementById('interes').value = "";
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayPrestamos.length; i++) {
    prestamos.innerHTML = prestamos.innerHTML +
    `<tr id="${arrayPrestamos[i].id}">` +
    '<td>' + '</td>' +
    '<td class="text-center">' + arrayPrestamos[i].id + '</td>' +
    '<td>' + '</td>' +
    '<td class="text-center">' + arrayPrestamos[i].nombre + '</td>' +
    '<td>' + '</td>' +
    '<td class="text-center">' +'$'+ arrayPrestamos[i].monto + '</td>' +
    '<td>' + '</td>' +
    '<td class="text-center">' + arrayPrestamos[i].cantCuotas + '</td>' +
    '<td>' + '</td>' +
    '<td class="text-center">' + arrayPrestamos[i].interes +'%'+ '</td>' +
    '<td>' + '</td>' +
    '<td class="text-center">' + arrayPrestamos[i].tiempo + '</td>' +
    '<td>' + '</td>' +
    '<td>' + '<button id="botonEliminar"  class="form-control btn-secondary" onclick="eliminarRegistro()"> Eliminar </button>' + '</td>' +
    '<td>' + '</td>' +
    '</tr>';       
}
}

function idArray() {
let ultimoId = localStorage.getItem('ultimoId') || "0";
let nuevoId =JSON.parse(ultimoId) + 1;
localStorage.setItem('ultimoId',JSON.stringify(nuevoId));
}


document.addEventListener('DOMContentLoaded', function(event){
    let arrayDomStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos')) ||[];
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayDomStorage.length; i++) {
    prestamos.innerHTML = prestamos.innerHTML +
    `<tr id="${arrayDomStorage[i].id}">` +
    '<td>' + '</td>' +
        '<td class="text-center">' + arrayDomStorage[i].id + '</td>' +
        '<td>' + '</td>' +
        '<td class="text-center">' + arrayDomStorage[i].nombre + '</td>' +
        '<td>' + '</td>' +
        '<td class="text-center">' +'$'+ arrayDomStorage[i].monto + '</td>' +
        '<td>' + '</td>' +
        '<td class="text-center">' + arrayDomStorage[i].cantCuotas + '</td>' +
        '<td>' + '</td>' +
        '<td class="text-center">' + arrayDomStorage[i].interes +'%'+ '</td>' +
        '<td>' + '</td>' +
        '<td class="text-center">' + arrayDomStorage[i].tiempo + '</td>' +
        '<td>' + '</td>' +
        '<td>' + '<button type="button" id="botonEliminar" class="form-control btn-secondary" onclick="eliminarRegistro()"> Eliminar </button>' + '</td>' +
        '<td>' + '</td>' +
    '</tr>';       
}
});

function eliminarRegistro(){
    let eliminar = document.getElementById('botonEliminar');
    eliminar.addEventListener("click", (event) =>{
    event.target.parentNode.parentNode.remove();
    eliminarStorage()
    });
}

function eliminarStorage(){
    let arrayDomStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos'));
    let arrayDomStorageIndex = arrayDomStorage.findIndex(element => element.id === id);
    arrayDomStorage.splice(arrayDomStorageIndex,1);
    let arrayPrestamosStorageJson = JSON.stringify(arrayDomStorage);
    localStorage.setItem("arrayDataPrestamos", arrayPrestamosStorageJson);
}



/* Funcion para ordenenar los montos de mayor a menor e imprimir la busqueda en el html */
function mostrarPrestamos() {
    let arrayDomStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos')) ||[];
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayDomStorage.length; i++) {
        arrayDomStorage.sort((a, b) => {         
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
                '<td class="text-center">' + arrayDomStorage[i].id + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].nombre + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' +'$'+ arrayDomStorage[i].monto + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].cantCuotas + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].interes +'%'+ '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].tiempo + '</td>' +
                '<td>' + '</td>' +
                '<td>' + '<button id="botonEliminar"  class="form-control btn-secondary" onclick="eliminarRegistro()"> Eliminar </button>' + '</td>' +
                '<td>' + '</td>' +
            '</tr>';             
    }   
    
}
/* Funcion para ordenenar los nombres de a-z e imprimir la busqueda en el html */
function ordenarPorId() {
    let arrayDomStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos')) ||[];
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayDomStorage.length; i++) {
        arrayDomStorage.sort((a, b) => {         
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
                '<td class="text-center">' + arrayDomStorage[i].id + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].nombre + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' +'$'+ arrayDomStorage[i].monto + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].cantCuotas + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].interes +'%'+ '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].tiempo + '</td>' +
                '<td>' + '</td>' +
                '<td>' + '<button id="botonEliminar"  class="form-control btn-secondary" onclick="eliminarRegistro()"> Eliminar </button>' + '</td>' +
                '<td>' + '</td>' +
            '</tr>';             
    }   
}

/* Funcion para ordenenar por Cantidad de Cuotas */
function ordenarPorCuotas() {
    let arrayDomStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos')) ||[];
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayDomStorage.length; i++) {
        arrayDomStorage.sort((a, b) => {         
            if(a.cantCuotas > b.cantCuotas) {
                return -1;
        }
            if(a.cantCuotas < b.cantCuotas) {
                return 1;
        }
                return 0;
            });
    prestamos.innerHTML = prestamos.innerHTML +
            '<tr>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].id + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].nombre + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' +'$'+ arrayDomStorage[i].monto + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].cantCuotas + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].interes +'%'+ '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].tiempo + '</td>' +
                '<td>' + '</td>' +
                '<td>' + '<button id="botonEliminar"  class="form-control btn-secondary" onclick="eliminarRegistro()"> Eliminar </button>' + '</td>' +
                '<td>' + '</td>' +
            '</tr>';             
    }   
}

/* Funcion para ordenenar por Interes */
function ordenarPorInteres() {
    let arrayDomStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos')) ||[];
    prestamos.innerHTML = ''; 
    for (var i = 0; i < arrayDomStorage.length; i++) {
        arrayDomStorage.sort((a, b) => {         
            if(a.interes > b.interes) {
                return -1;
        }
            if(a.interes < b.interes) {
                return 1;
        }
                return 0;
            });
    prestamos.innerHTML = prestamos.innerHTML +
            '<tr>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].id + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].nombre + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' +'$'+ arrayDomStorage[i].monto + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].cantCuotas + '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].interes +'%'+ '</td>' +
                '<td>' + '</td>' +
                '<td class="text-center">' + arrayDomStorage[i].tiempo + '</td>' +
                '<td>' + '</td>' +
                '<td>' + '<button id="botonEliminar"  class="form-control btn-secondary" onclick="eliminarRegistro()"> Eliminar </button>' + '</td>' +
                '<td>' + '</td>' +
            '</tr>';             
    }   
}

/* Funcion que busca los datos de la persona */
function calcularPrestamos() {
    let arrayDomStorage = JSON.parse(localStorage.getItem('arrayDataPrestamos')) ||[];
    prestamos.innerHTML = ''; 
    /* Se recorre el array para conseguir el index del nombre ingresado */
    let personaBuscada = document.getElementById('personaBuscada').value.toLowerCase();
    let buscador = arrayDomStorage.map(nombre => nombre.nombre);
    let index = buscador.indexOf(personaBuscada);
    /* Se realizan los calculos con el index encontrado */
    let interesCuota = () => parseInt((arrayDomStorage[index].monto / arrayDomStorage[index].cantCuotas) * (arrayDomStorage[index].interes / 100 + 1));
    let interesTotal = () => parseInt((arrayDomStorage[index].monto * (arrayDomStorage[index].interes / 100 + 1)) - arrayDomStorage[index].monto);
    /* Se limpia e imprime en html la informacion */
    resultados.innerHTML = ''; 
    resultados.innerHTML =` 
    <hr/>
        <div class="container">
            <div class="row d-flex align-items-center justify-content-md-center">
                <div class="col-4 text-center">
                    <p> El interes del prestamo de ${arrayDomStorage[index].nombre} es de $${interesTotal(interesTotal)} pesos</p>
                </div>
            </div>
            <div class="row d-flex align-items-center justify-content-md-center">
                <div class="col-4 text-center">
                    <p>El valor por cuota es de $${interesCuota(interes)} pesos.</p>
                </div>
            </div>
            <div class="row d-flex align-items-center justify-content-md-center">
                <div class="col-4 text-center">
                    <p>El monto final a devolver es de $${interesTotal(interesTotal)+arrayDomStorage[index].monto} pesos.</p>
                </div>
            </div>   
        </div>
    <hr/>`;
    document.getElementById('personaBuscada').value = "";
}   

