//calculo de los salarios por tipo 

const salariosCol = colombia.map( //iterar por cada persona en el array creado en salarios 
    function (personita){
        return personita.salary; 
    }
);

//ordenar array
const salariosColSorted = salariosCol.sort(
    function (salaryA,SalaryB){
        return salaryA-SalaryB; //para ordenar
    }

);

function esPar(numero){
    return (numero %2===0); //retornamos el resultado de la operación y ver si es 0, eso nos devuelve true
    
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2 ); 

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1 , personitaMitad2]); 
        return mediana; 

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad; 
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)

//mediana top 10%
const spliceStar = (salariosColSorted.length * 90) / 100; //salarios porcentaje
const spliceCount = salariosColSorted.length - spliceStar; // de la cantidad de personas que hay le vamos a restar posición donde empieza el 90%

const salarios10ColTop10= salariosColSorted.splice(
    spliceStar, 
    spliceCount, 
    ); //splice, tajadas, posición donde le diga 
    

    const medianaTop10Col = medianaSalarios(salarios10ColTop10); 

console.log(
    medianaGeneralCol,
    medianaTop10Col, 
); 