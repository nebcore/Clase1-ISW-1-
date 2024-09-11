//EJERCICIO1
let nombre = "Juan";
const edad = 20;
const puedoconducir = true;

console.log(' ');
console.log('EJERCICIO 1:');

console.log(nombre);
console.log('dato:',typeof nombre);
console.log(edad);
console.log('dato:',typeof edad);
console.log(puedoconducir);
console.log ('dato:',typeof puedoconducir);

//EKJERCICIO2
const numero1 = 20;
const numero2 = 40;

suma = numero1 + numero2;

console.log(' ');
console.log('EJERCICIO 2:');

console.log(suma);
resta = numero1 - numero2;
console.log(resta);
multiplicacion = numero1 * numero2;
console.log(multiplicacion);
division = numero1 / numero2;
console.log(division);
modulo = numero1 % numero2;
console.log(modulo);

//EJERCICIO3
const numero3 = 15;
const numero4 = 20;
const numero5 = '25';

console.log(' ');
console.log('EJERCICIO 3:');

console.log('el numero3 es mayor o igual que numero4:');
console.log(numero3 >= numero4);
console.log('el numero3 es menor o igual que numero4:');
console.log(numero3 <= numero4);
console.log('el numero3 es menor que numero5:');
console.log(numero3 < Number(numero5)); //convertir a numero
console.log('el numero5 es menor que numero4:');
console.log(Number(numero5) < numero4);
console.log('el numero5 es estrictamente diferente que numero3:');
console.log(Number(numero5) !== numero3);
console.log('el numero3 es estrictamente igual al numero4:');
console.log(numero3 === numero4);

//EJERCICIO4
const numero6 = 10;
const numero7 = 20;
const numero8 = 30;

console.log(' ');
console.log('EJERCICIO 4:');
console.log('imrpimir en consola el numero mayor de los tres:');
//console.log(Math.max(numero6, numero7, numero8));
if (numero6 > numero7 && numero6 > numero8){
    console.log(numero6);
}   else if (numero7 > numero6 && numero7 > numero8){
    console.log(numero7);
}   else {
    console.log(numero8);
}
console.log('imrpimir en consola el numero menor de los tres:');
//console.log(Math.min(numero6, numero7, numero8));
if (numero6 < numero7 && numero6 < numero8){
    console.log(numero6);
}   else if (numero7 < numero6 && numero7 < numero8){
    console.log(numero7);
}   else {
    console.log(numero8);
}
console.log('Imprimir en consola si el numero6 es par o impar:');
if (numero6 % 2 === 0){
    console.log('El numero6 es par');
}   else {
    console.log('El numero6 es impar');
}
console.log('Imprimir en consola si el numero7 es par o impar:');
if (numero7 % 2 === 0){
    console.log('El numero7 es par');
}   else {
    console.log('El numero7 es impar');
}
console.log('Imprimir en consola si el numero8 es par o impar:');
if (numero8 % 2 === 0){
    console.log('El numero8 es par');
}   else {
    console.log('El numero8 es impar');
}
console.log('Imprimir en consola si el numero6 es múltiplo de 5:');
if (numero6 % 5 === 0){
    console.log('El numero6 es múltiplo de 5');
}   else {
    console.log('El numero6 no es múltiplo de 5');
}
console.log('Imprimir en consola si el numero7 es múltiplo de 5:');
if (numero7 % 5 === 0){
    console.log('El numero7 es múltiplo de 5');
}   else {
    console.log('El numero7 no es múltiplo de 5');
}
console.log('Imprimir en consola si el numero8 es múltiplo de 5:');
if (numero8 % 5 === 0){
    console.log('El numero8 es múltiplo de 5');
}   else {
    console.log('El numero8 no es múltiplo de 5');
}

//EJERCICIO5
console.log(' ');
console.log('EJERCICIO 5:');

console.log('Numeros del 1 al 10:');
for (let i = 1; i <= 10; i++){
    console.log(i);
}
console.log('Numeros del 10 al 1:');
for (let i = 10; i >= 1; i--){
    console.log(i);
}
console.log('Numeros pares del 1 al 10:');
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}
console.log('Numeros impares del 1 al 10:');
for (let i = 1; i <= 10; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}
console.log('Numeros múltiplos de 3 del 1 al 10:');
for (let i = 1; i <= 10; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}
console.log('Numeros múltiplos de 5 del 1 al 10:');
for (let i = 1; i <= 10; i++){
    if (i % 5 === 0){
        console.log(i);
    }
}
console.log('Numeros múltiplos de 3 y 5 del 1 al 10:');
for (let i = 1; i <= 10; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}
console.log('Numeros múltiplos de 3 o 5 del 1 al 10:');
for (let i = 1; i <= 10; i++){
    if (i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

//EJERCICIO6
console.log(' ');
console.log('EJERCICIO 6:');

function mayus(cadena) { //convertir a mayúsculas
    return cadena.toUpperCase();
}
console.log(mayus('hola mundo'));

function minus(cadena) { //convertir a minúsculas
    return cadena.toLowerCase();
}
console.log(minus('HOLA MUNDO'));

function resta1(num1, num2) { //resta de dos números
    return num1 - num2;
}
console.log(resta1(20, 10));

function div(num1, num2) { //división de dos números
    if (num2 !== 0) { //no se puede dividir por cero
        return num1 / num2;
    } else {
        return 'No se puede dividir por cero';
    }
}
console.log(div(20, 10));

function mult(num1, num2) { //multiplicación de dos números
    return num1 * num2;
}
console.log(mult(20, 10));

function long(cadena) { //longitud de una cadena de texto
    return cadena.length;
}
console.log(long('hola mundo'));

//EJERCICIO7
console.log(' ');
console.log('EJERCICIO 7:');

console.log('array de numeros:');
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

function sumaArray(numeros) {
    return numeros.reduce((suma, numero) => suma + numero, 0);
}
console.log('suma del array:');
console.log(sumaArray(numeros));

function promedioArray(numeros) {
    const suma = sumaArray(numeros); // Usamos la función de suma del paso anterior
    return suma / numeros.length;
}
console.log('promedio del array:');
console.log(promedioArray(numeros));

const strings = ['ella', 'es', 'callaita'];

function convertirStringsAMayusculas(arrayStrings) {
    return arrayStrings.map(cadena => cadena.toUpperCase());
}

console.log('array de strings:');
console.log(strings);
console.log('array de strings en mayúsculas:');
console.log(convertirStringsAMayusculas(strings));

function filtrarNumerosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}
console.log('array de numeros pares:');
console.log(filtrarNumerosPares(numeros));

//EJERCICIO8
console.log(' ');
console.log('EJERCICIO 8:');

//Crear un objeto de persona: Define un objeto llamado "persona" 
//que tenga propiedades como nombre, edad y género. Luego, muestra
//la información de esa persona por la consola.

const persona = {
    nombre: 'Luffy',
    edad: 19,
    genero: 'masculino'
};
console.log('Objeto persona:');
console.log(persona);

//Crear un objeto llamado caja: La caja se compone de cuadernos,
//lápices, papel, fotografías y indica el estado si esta en buen
//estado o no.  Imprimir el objeto entero por consola, imprimir
//cada propiedad del objeto y el tipo de dato que es.

const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 50,
    estado: 'buen estado'
};
console.log('Objeto caja:');
console.log(caja);

console.log('Propiedades del objeto caja:');
console.log('cuadernos:', caja.cuadernos, 'dato:', typeof caja.cuadernos);
console.log('lapices:', caja.lapices, 'dato:', typeof caja.lapices);
console.log('papel:', caja.papel, 'dato:', typeof caja.papel);
console.log('fotografias:', caja.fotografias, 'dato:', typeof caja.fotografias);
console.log('estado:', caja.estado, 'dato:', typeof caja.estado);
