//JS code here


//import { name } from "./utils.js";
//import nombre from './utils.js'
//import { abc as age , apellido } from "./utils.js";
import * as variables from './utils.js' //aca se crearia un objeto llamado variables


console.log(variables.apellido);

//Operators
console.log(10-5)
console.log(10+5)
console.log(10*5)
console.log(10/2)
//String + tambien sirve para concatenar
console.log('Hola' + ' Amigo')

if(10===10){
    console.log('10 equals 10 :)');
    
}

//Functions
//can be used to return values , can be executes whatever you want as well as mnay time you want too

function createGreeting(name, message ='Hello'){
    return `Hi, ${name}. message`
}

const greeting1= createGreeting('Jhon', 'I am playing soccer')
const greeting2 = createGreeting('Laura', 'I love pizza')

console.log({
    greeting1, greeting2
});

//Funcion de valores

function calculateValues(a,b,c){
    
        if(!a || !b || !c){
            console.log('Debes llenar todos los valores necesarios');
            
        }else if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ){
            console.log('Los valores deben ser numeros');
            
        }else{
            console.log('Las pruebas pasaron.\n%cNúmero 1:%c %d\n%cNúmero 2:%c %d\n%cNúmero 3:%c %d\n%cSuma total:%c %d',
                'font-weight: bold;', 'font-weight: normal;', a,
                'font-weight: bold;', 'font-weight: normal;', b,
                'font-weight: bold;', 'font-weight: normal;', c,
                'font-weight: bold;', 'font-weight: normal;', a + b + c
            );
        }
   

}

console.log(calculateValues(1,5,500))

//Objetos
const animals = {
    names: ['Dog', 'Cat', 'Lion'], 
    location: 'Bogota',
    saludar(){
        const namesStrings = this.names.join(', ')
        console.log(`Hello I'm a ${namesStrings} based in ${this.location}` );
        
    }
}

console.log(animals.saludar());

class persona{
    constructor({name,age}){
        this.name = name
        this.age = age
        

    }

    presentacion(){
        console.log('Hola' + ' soy' +  ' ' +this.name);
        
    }
}

const jhoncito = new persona({name: 'Jhon'})
jhoncito.presentacion()


//Arrays and arrays methos like map:
//push,findIndex, map

const pups = ['Simon', 'Oscar', 'Gabriel', 'Juanes']
pups.push('Barajas')

let counter = 0

const pupsIndex = pups.findIndex((el)=> el == 'Oscar')
const pupsEdited = pups.map((el)=> el + '!')
const pupsObject = pups.map((el)=>{
    counter ++
    const object = { [`name${counter}`]: el}
    return object

} )
console.log(pupsIndex);
console.log(pupsEdited);
console.log(pupsObject);


console.log(pups);

/*Deestrucutrar arrays y objetos*/
//En arrays no afecta si coloco un nombre distinto a la propiedad
const [nameOne, nameTwo] = ['Juan', 'Camilo']
console.log(nameOne);
console.log(nameTwo);

//En objetos se debe poner en la desrructuracion el mismo nombre de la propiedad o un alias que haga referencia al nombre de la propiedad que se tiene en el objeto, de lo contrario si se accede a esa variable de la destructuracion devolvera undefined.
const {model:modelSerial, brand, color: colorBrand} = {
    model: '18854r1ttD',
    brand: 'Whirpool',
    color: 'black'
}

console.log(modelSerial);
console.log(brand);
console.log(colorBrand);

/*Spread operator*/

const names = ['Jhon', '0scar']
const ages = [...names , 25, 30]
console.log(ages);

const user = {
    name: 'Baga',
    id: 558589,
    isActive: false
}

const admin = {
    isAdmin: true,
    ...user
}

console.log(admin);

/*Control Structures if..*/ 

/* let suma = parseInt(prompt('¿Cuanto es 2 + 2 ?'))

while(isNaN(suma) || suma !== 4){
    suma = parseInt(prompt('Respuesta incorrecta. ¿Cuánto es 2 + 2? Ingresa solo números'))
}

    alert('Sabes sumar') */

const hobbies = ['Parkour', 'Calistenia']

for(let hobby of hobbies){
    if(hobby.startsWith('P')){
        console.log('Unos de los hobbies empieza por P');
        
    }else{
        console.log('Ninguno de los hobbies empieza por P');
        
    }
}

/*Using functions as values - set time outs , funciones que se pasan como parametros a una funcion*/

function messageGreeting(name, lastName) {
    console.log(`Hello ${name} ${lastName}`);
}

const messageGreetingTwo = (name, lastName) =>{
    console.log(`Hello ${name} ${lastName}`);
}

setTimeout(messageGreeting, 2000,'Jhon', 'Ramirez')
setTimeout(messageGreetingTwo, 3000, 'David', 'Forero')
//setTimeout(() => messageGreeting('Juanes', 'Ro'), 4000);

//Pasar funciones como valor dentro de otras funciones

function saludar(saludando){
    saludando()
}

function saludando(name, age){
    console.log(`I am ${age}. My name is ${name}`);
    

}

saludar(() => saludando('Jhon', 25));

//Llamar funciones dentro de otras funciones
function init(name, surname){
    //Esta funcion tiene acceso a las variables definidas en init() 
    //Se crea un closure , la funcion interna recuerda que puede acceder a las variables de su ambito externo
    function greeting(){
        console.log(`Hello ${name} ${surname}!!`);
        
    }

    greeting()
}

init('Jhon', 'Ramirez')

/*Primitive values vs references:
-Cuando se trabaja con valores primitivos(strings, booleans, numbers) y estos se modifican , se crea un nuevo espacion en memoria
-Cuando se trabaja con valores e referencia como objetos o arreglos y estos se modifican , no se modifica el espacio en memoria osea el address solo se accede a ese espacio de memoria y se le hace un cambio
*/



















