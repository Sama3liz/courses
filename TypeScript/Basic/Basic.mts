/* Inferencia */

const a = 1;
const b = 1;
const c = a + b;

let cadenadetexto = "hola";

/* ANY */
/* Hay una forma de evitar los any implicitos */
let obj: any = { x: 0 };
/* obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj; */

/* Funciones */

/* function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar("Pepe");
saludar(2); */

/* Forma 1 para poner el tipo en los parametros de una funcion */
/* function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} años`);
} */

/* Forma 2 */
/* function saludar(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(`Hola ${name}, tienes ${age} años`);
}

saludar({ name: 'Pepe', age: 2 }); */

/* Devolver datos */
/* Forma para devolver los datos de una funcion */
/* function saludar({ name, age }: { name: string; age: number }): number { // el tipo final es lo que devuelve la funcion
  console.log(`Hola ${name}, tienes ${age} años`);
  return age;
} */

/* Pasar funciones como parametros */
/* Se lee como recibes una funcion que tiene un parametro name: string y que devuelve (=>) void */
/* const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn("Migel");
};

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHiFromFunction(sayHi); */

/* Tipar arrow functions */
/* Forma 1 */
const sumar = (a: number, b: number): number => {
  return a + b;
};
/* Forma 2 */
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

/* NEVER */
/* Funcion que nuneca va a devolver nada */
/* function throwError(message: string): never {
  throw new Error(message);
} */

/* Inferencia de funciones anonimas segun el contexto */
/* const avengers = ['Spidey','Hulk', 'Pietro']

avengers.forEach(avenger => {
    console.log(avenger.toUpperCase())
}) */

/* OBJETOS */
/* let hero = {
  name: "thor",
  age: 1500,
};

function createHero(name: string, age: number) {
  return { name, age };
}

const thor = createHero("Thor", 1500);
*/

/* TYPE ALIAS */
/* Siempre se hace el tipo en Pascal case */
/* type Hero = {
  name: string;
  age: number;
};

let hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

const thor = createHero({ name: "Thor", age: 1500 });
*/

/* Optional properties y template union types*/
/* type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
  readonly id?: HeroId; // para typescript es readonly pero para js es algo normal por lo que si es read only en js debe ser definido con un object.freeze
  name: string;
  age: number;
  isActive?: boolean; // el signo ? le hace un tipo de parametro opcional
};

let hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const thor = createHero({ name: "Thor", age: 1500 });
console.log(thor);
 */

/* UNION TYPES */
/* type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

let annn: number | string;
annn = 2;

type Hero = {
  readonly id?: HeroId; // para typescript es readonly pero para js es algo normal por lo que si es read only en js debe ser definido con un object.freeze
  name: string;
  age: number;
  isActive?: boolean; // el signo ? le hace un tipo de parametro opcional
  powerScale?: HeroPowerScale;
};

let hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const thor = createHero({ name: "Thor", age: 1500 });
thor.powerScale = ''

console.log(thor); */

/* INTERSECTION TYPES */
/* type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = {
  readonly id?: HeroId; 
  isActive?: boolean; 
  powerScale?: HeroPowerScale;
};

type Hero = HeroBasicInfo & HeroProperties

let hero = {
  name: "thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const thor = createHero({ name: "Thor", age: 1500 }); */

/* TYPE INDEXING */
/* type HeroProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressHero: HeroProperties["address"] = {
  city: "Madrid",
  planet: "Earth",
}; */

/* TYPE FROM VALUE */
/* const address = {
  planet: "Earth",
  city: "Madrid",
};

type Address = typeof address;

const addressTwitch: Address = {
  planet: "Mars",
  city: "Twitch",
}; */

/* TYPE FROM FUCNTION RETURN */
/* function createAddress() {
  return {
    planet: "Tierra",
    city: "Barcelona",
  };
}

type Address = ReturnType<typeof createAddress>; */

/* ARRAYS */
/* const languages: (string | number)[] = [];
const languages: Array<string> = [];
languages.push("JavaScript") */

/* TUPLAS */
/* Basicamente es un array de arrays pero con el tamaño definido */
type CellValue = "X" | "O" | "";
const gameBoard: [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
] = [
  ["X", "", "O"],
  ["O", "X", "X"],
  ["X", "", "X"],
];

/* ENUMS */
/* Para JS deberiamos hacerlo asi */
/* const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
};
function mostrarMensaje(tipoDeError) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No se encuentra el recurso");
  }
} */
/* En TS lo mejor seria usar Enums, los cuales se usan en una coleccion de datos finita*/
enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}
/* Tambien se puede usar const enum que genera menos codigo. Siempre que se pueda es recomendabel usarlo asi */
/* Pero si es un componente que va hacia el exterior es de usar solo enum */
function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No se encuentra el recurso");
  }
}

/* ASERCIONES DE TIPOS */
const canvas = document.getElementById("span");
/* NULL si no lo encuentra */
/* HTMLElement si lo encuentra */
/* Inferencia -> TypeScript se da cuenta dentro del if */
/* ya el canvas va a poder ser un HTMLCanvasElement */
if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
}
/* typeof -> para tipos */
/* instanceof -> para instancias */

/* ASERCIONES FETCHING */
/* Para usar modulos en TS la extension del archivo por norma seria .mts */
/* Revisar midu para esto */
const API_URL = "";
const response = await fetch(API_URL);

if (!response.ok) {
  throw new Error("Request failed");
}

const data = await response.json();

const repos = data.items.map((repo) => {
  console.log(repo);
});

/* INTERFACES */
/* Basicamente es la forma en la que debe ir un objeto */
/* type Hero = {
  id: string;
  name: string;
  age: number;
}; */
interface Hero {
  id: string;
  name: string;
  age: number;
}
const hero: Hero = {
  id: "1",
  name: "Spiderman",
  age: 30,
};
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}
interface CarritoDeCompras {
  totalPrice: number;
  productos: Producto[];
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "test",
      precio: 25,
      quantity: 1,
    },
  ],
};

interface Zapatilla extends Producto {
  talla: number;
}

interface CarritoOps {
  add: (product: Producto) => void;
  remove: (id: number) => void;
  clear: () => void;
}

/* NARROWING */
/* Perder los tipos o ser mas especificos con cual tipo trabajar */
function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === "string") {
    return objeto.length;
  }
  return objeto.toString().length;
}
mostrarLongitud("1");

interface Mario {
  company: "Nintendo";
  nombre: string;
  saltar: () => void;
}
interface Sonic {
  company: "Sega";
  nombre: string;
  correr: () => void;
}
type Personaje = Mario | Sonic;

/* TYPE GUARD */
/* Dejame comprobar si el personaje es Sonic */
/* Esta funcion determina si ses o no */
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}
function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr();
    return;
  } else {
    personaje.saltar();
    return;
  }
}
/* Es mejor evitar el Type Guard siempre que se pueda */

/* En los archivos .d.ts solo deben ir las definiciones donde no va codigo normal */
/* En este tipo de archivos va interfaces y types */