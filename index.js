//RESUELVE LOS EJERCICIOS AQUI

//MAP 
function elevarCuadrado(numeros) {
    const cuadrado = numeros.map(x => x ** 2);
    return cuadrado;
}

const lista = [4, 5, 6, 7, 8, 9, 10];
const resultado = elevarCuadrado(lista);
console.log(resultado)


//Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'],
// generar un segundo array que consiga generar de salida el resultado esperado.

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const frasesPorComida = {
    Pizza: 'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso',
};
const frases = foodList.map(comida => frasesPorComida[comida]);
console.log(frases);


//3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades
// del objeto proporcionado:

const staff = [
    {
        name: "Andrea",
        role: "Profesora",
        hobbies: ["baloncesto", "ver pelis"]
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
];

const respuestas = staff.map(persona => {
    return persona.name + " es " + persona.role + " y le gusta " + persona.hobbies.join(" y ");
});

// Imprimir el resultado
console.log(respuestas);





//FILTER

//4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
//
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num % 2 !== 0);
console.log(result4);


//5.- Dado el array foodList2, genera un segundo
//array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

const result5 = foodList2.filter(list => list.isVeggie).map(item => {
    const articulo = item.name.includes("burguer") ? "rica" : "rico";
    return "¡Qué " + articulo + " " + item.name + "me voy a comer!";
});
console.log(result5);



//6- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

const expensiveItems = inventory.filter (item => item.price >300)
.map (item => item.name)

console.log (expensiveItems);




//REDUCE

//6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
let numeros = [39, 2, 4, 25, 62];

//valor actual, en la posición correspondiente
const result = numeros.reduce ((acumulador, valorActual)=> {
    return acumulador * valorActual; 
  }, 1); 

  console.log (result);


 //7- Concatena todos los elementos del array con reduce para que devuelva una sola frase
 const sentenceElements = [
    'Me',
    'llamo',
   "Andrea" , 
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
  
  // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
  
 
const solucion =  sentenceElements.reduce ((acumulador , valorActual) => {
    return acumulador + " " + valorActual}); 

console.log (solucion);

//8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
// Resultado --> 60

const librosCode = books.filter ( book=> book.category === "code");
const montoTotal = librosCode.reduce((acumulador, libro) => {
    return acumulador + libro.price; // Sumamos el precio del libro actual al acumulador
  }, 0);
  
  console.log(montoTotal);


