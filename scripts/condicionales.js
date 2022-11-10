/*14*/
let number = prompt("Sorteo Doritos")
if (number > 10) {
    document.write("Ganador");
} else if (number <= 10) {
    document.write("Perdedor")
}else {
    document.write ("Intenta de nuevo")
}

/*15*/

function esNumeroDeLaSuerte(num1){
    if(num > 0 && (num % 3 == 0 || num % 2 == 0) && num != 15) {
         alert("Es el numero de la suerte");}
        else{
         alert("No es el numero de la suerte");
         }
        }
        
        let num = parseInt(prompt("✨ingrese el número de la suerte!✨  "));
        esNumeroDeLaSuerte(num);
        

}