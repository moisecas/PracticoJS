//const precioOriginal = 130; 
//const descuento = 17; 

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100; 

    return precioConDescuento; 

}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 

    const inputDiscount = document.getElementById("InputDiscount");     
    const discountValue = inputDiscount.value; 

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
    
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText= "el precio con el descuento es: $" + precioConDescuento; //innerText para asignar un valor desde js a html
                                
    


}



//console.log({
    //precioOriginal, 
    //descuento, 
    //porcentajePrecioConDescuento,
    //precioConDescuento, 

//});