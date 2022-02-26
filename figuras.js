//codigo del cuadrado 
console.group("cuadrados"); //agrupar mensajes en consola
const ladoCuadrado = 5; //const para variables que no cambian 
console.log("lados del cuadrado: " + ladoCuadrado + "cm"); 

const perimetroCuadrado = ladoCuadrado*4;
console.log("el perimetro del cuadrado es:" + perimetroCuadrado + "cm"); 

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("el area del cuadrado es:" + areaCuadrado + "cm2"); 
console.groupEnd(); //es necesario cerrarlo 

//codigo del triangulo 
console.group("triangulo");
const ladoTriangulo = 6; //const para variables que no cambian 
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 4.4;
console.log("los lados del triangulo miden: " 
+ ladoTriangulo + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm" + alturaTriangulo + "cm" );

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo; 
console.log("el perimetro del triangulo es:" + perimetroTriangulo + "cm");

const areaTriangulo= (baseTriangulo*alturaTriangulo)/2; 
console.log("el area del triangulo es:" + areaTriangulo + "cm");


console.groupEnd(); 

//codigo del circulo 
console.group("circulo");

//radio
const radioCirculo = 4;

//diamtro
const diametroCirculo = radioCirculo*2; 
//pi usamos math para ser mas precisos en valores inmutables
const PI = Math.PI; 
//circunferencia
const perimetroCirculo = diametroCirculo*PI;

//area 
const areaCirculo = (radioCirculo*radioCirculo) * PI; 
console.log("circulo: " + "radio: ", + radioCirculo + "cm " + "diametro: " + diametroCirculo + "cm "
+ "circunferencia: " + perimetroCirculo + "cm " + "area: " + areaCirculo + "cm"); 

console.groupEnd(); 


