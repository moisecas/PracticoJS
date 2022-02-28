//lista de elementos 


//const lista1 = [
    //100,
    //200,
    //300,
    //500,
//]; //termina en ; PRUEBA

 


function calcularPromedioAritmetico(lista){
    let sumaLista = 0;
    
    for (let i = 0; i < lista.length; i++){

        sumaLista = sumaLista + lista[i]; //entrar a la posición que corresponda
  }

    const promedioLista = sumaLista/lista.length;
    return promedioLista

}