//Ejercicio 2: Diferencia entre var, let y const

//1) Uso de let
let ciudad = "Bogota";
console.log("Ciudad inicial:", ciudad);

ciudad = "Cali";
console.log("Ciudad modificada:", ciudad);
//Conclución: "let" si me permite cambiar el valor de mi variable ciudad

console.log("\n");

//2) Uso de const
const pais = "Colombia";
console.log("Pais:", pais);
//pais = "Canada";
//console.log("Pais modificado:", pais); 
//  |
//  |---> Conclución: "const" no me permite cambiar el valor de mi variable pais, me da un error de tipo TypeError: Assignment to constant variable.

console.log("\n");

//3) Uso de var
var color = "Rosa fancy 🩷✨";
console.log("Color inicial:", color);

{
    color = "Verde menta 🍃";
    console.log("Color modificado:", color);
}
//console.log("Color modificado:", color);
//  |
//  | 
//  L-->Nota: Como podemos ver en el codigo, "var" si me permite cambiar el valor este o no dentro de un bloque {}, por lo que no respeta los limites de un bloque
//           Peeeerooo, una diferencia con let, es que este si respeta los limites de un bloque {} y var ya no es tan usado por su corto alcance y antiguedad tal como se mencionaba en clase.




//Tambien puede cambiar su valor al igual que "let"
//  |
//  v
//color = "Azul";
//console.log("Color modificado:", color);   --> Cambia el valor de la variable color
