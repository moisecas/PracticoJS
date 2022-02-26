//usando funciones
 
//codigo del cuadrado 
console.group("cuadrados"); //agrupar mensajes en consola
//const ladoCuadrado = 5; //const para variables que no cambian 
//console.log("lados del cuadrado: " + ladoCuadrado + "cm"); 

function perimetroCuadrado(lado){ //las funciones deben recibir parametros
    return lado *4; 

}
perimetroCuadrado()
//console.log("el perimetro del cuadrado es:" + perimetroCuadrado + "cm"); 


function areaCuadrado (lado){
    return lado * lado
}

//console.log("el area del cuadrado es:" + areaCuadrado + "cm2"); 
console.groupEnd(); //es necesario cerrarlo 

//codigo del triangulo 
console.group("triangulo");
//const ladoTriangulo = 6; //const para variables que no cambian 
//const ladoTriangulo2 = 6;
//const ladoTriangulo3 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 4.4;
//console.log("los lados del triangulo miden: " 
//+ ladoTriangulo + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm" + alturaTriangulo + "cm" );

function perimetroTriangulo(Lado1, Lado2, base){
    return Lado1 + Lado2 + base; 

}

function areaTriangulo(base,altura){
    return (base * altura)/2; 

}

console.groupEnd(); 

//codigo del circulo 
console.group("circulo");

//radio
//const radioCirculo = 4;

//diametro
function diametroCirculo(radio){
    return radio * 2; 
}

//const diametroCirculo = radioCirculo*2; 
//pi usamos math para ser mas precisos en valores inmutables
const PI = Math.PI; 
//circunferencia const perimetroCirculo = diametroCirculo*PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); //diametro es igual a llamar la función enviando como argumento radio
    return diametro*PI; 
}

//area 
function areaCirculo(radio){
    return (radio * radio) * PI; 

}

//const areaCirculo = (radioCirculo*radioCirculo) * PI; 
//console.log("circulo: " + "radio: ", + radioCirculo + "cm " + "diametro: " + diametroCirculo + "cm "
//+ "circunferencia: " + perimetroCirculo + "cm " + "area: " + areaCirculo + "cm"); 

console.groupEnd(); 

//aquí interactuamos con el html 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const value = input.value; //recibiendo el dato que escribe el usuario por pantalla 
    const perimetro = perimetroCuadrado(value); //le damos por parametro el valor escrito por el usuario 
    alert(perimetro); 

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); 
    const value = input.value; //recibiendo el dato que escribe el usuario por pantalla 
    const area = areaCuadrado(value); //le damos por parametro el valor escrito por el usuario 
    alert(area);  

}