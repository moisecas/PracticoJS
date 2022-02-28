const lista1 = [
    1,
    2,
    5,
    6,
    9,
    10,
    11,
    11,
    2,
    2,
    6,
    5,

];
//para calcular debemos contar cuantas veces aparece cada número. Convertir el array en un objeto

const lista1Count = {}; 

//con el metodo map recorremos el array 
lista1.map(
    function (elemento) {
        //verificamos primero si ya existe el elemento dentro del array
        if (lista1Count [elemento]){ 
            lista1Count[elemento] +=1; //+= sumarle 1 a la variable


        } else {
            lista1Count [elemento] = 1; //elemento en el array             
        }
        

    }

);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA,elementoB){
        return elementoA[1] - elementoB[1]; 
    }
)

const moda = lista1Array[lista1Array.length - 1];  

//Object.entries enviar como argumento el objeto que queremos convertir en un array
//const lista1Array = Object.entries(lista1Count).sort(
    //function(valorAcumulado, nuevoValor){
        //valorAcumulado - nuevoValor

    //}
//); 