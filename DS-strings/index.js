"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

/*

    >> Array destructuring<<

const func = ()=>{
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  };
  
  let first,second;
  [first,second] = restaurant.categories
  console.log(`${first} ${second}`);

  [first,second] = restaurant.starterMenu
  console.log(`${first} ${second}`)
  
}

func()


// const [main, , , secondary] = restaurant.categories


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// let first,second;
let [first,second] = restaurant.categories;
  // console.log(first,second);

[first,,second] = restaurant.starterMenu;
console.log(first,second);

const arr = [1,2,[3,4],5];
let [one=0,two=0,three=0,four=0,five=0] = arr;
console.log(`one: ${one}
two: ${two}
three: ${three} 
four: ${four}
five: ${five}`);

console.log("one ",one,"two ",two,"three ",three,"four ",four,"five ",five);



let array = [1,2,
  [3,
    [4,5],
  6]
  ,7,8];
let [one, two, [ three, [ a, c ], b ], four, five] = array;
console.log(one);
console.log(two);
console.log(three);
console.log(a);
console.log(c);
console.log(b);
console.log(four);
console.log(five);

 */
/*
// >>Template Literal <<
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`${matrix}`); //array elemets as a string -- same as array to toString function
console.log(matrix.toString());
console.log(matrix);*/

/*

    >> Object Destructuring <<



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  orderDelivery1: function ({
    starterIndex,
    mainIndex,
    time = '20:00',
    address = 'Gujarat',
  }) {
    console.log(starterIndex, mainIndex, time, address);
  },
};

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Rajkot, Gujarat',
  starterIndex: 1,
});

restaurant.orderDelivery1({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery1({
  address: 'Rajkot, Gujarat',
  starterIndex: 1,
});

restaurant.orderDelivery1({});

*/

/*
      >> Spread Operator <<


// const array = [1, [2, 4], 3];
// const newArray = [...array];
// console.log(array, newArray);
// newArray[0] = 10;
// console.log(array, newArray);

// let newArrList = [...arrList];
// console.log(arrList[0], '--', newArrList[0]);
// console.log(arrList[1], '--', newArrList[1]);

// newArrList[0] = 'Hii';
// newArrList[1].person = 'Luke';

// console.log(arrList[0], '--', newArrList[0]);
// console.log(arrList[1], '--', newArrList[1]);

// const arrayCopy = Object.assign({}, arrList);
// console.log(arrList[1].person, '--', arrayCopy[1].person);
// arrayCopy[0] = 'hii';
// arrayCopy[1].person[1] = 'Luke';
// arrayCopy[1].person[2].age[1] = 13;
// console.log(arrList, '--', arrayCopy);

/*let arrList = ['hello', ['jonas', 'mike', { age: [5, 10] }]];

const arrayCopy = Object.assign({}, arrList);

arrayCopy[1][0] = 'luke';

console.log(arrList[1], '--', arrayCopy[1]);

// const starterMenu = ['fries', 'chips', 'salad'];
// const mainMenu = ['pizza', 'pasta', 'noodles'];

// const newMenu = [...starterMenu, ...mainMenu];
// console.log(newMenu);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`pasta served: ${ing1}, ${ing2} and ${ing3}`);
  },
};

/*const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(restaurant.orderPasta(...ingredients));

//object
const newRestaurant = { ...restaurant, founder: 'weybee' };

console.log(newRestaurant);

newRestaurant.name = 'Ristorante Roma';
console.log(newRestaurant);
*/

/* 
    >> Rest Pattern <<
    Opposite of spread


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPizza: function (mainIngredient, ...otheringredinets) {
    console.log(`main ingredient: ${mainIngredient}`);
    console.log(`otherIngredients: ${otheringredinets}`);
  },
};

/*const [pizza, risotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(`pizza : ${pizza}, risotto: ${risotto}, otherFoods: ${otherFood}`);

console.log(otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); //weekdays consist of all days object except sat 

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(4, 3, 7, 6);
add(8, 2, 5, 3, 2);

const arr = [1, 2, 3, 4];
add(...arr);

restaurant.orderPizza('cheese', 'mushroom');
restaurant.orderPizza('kurkure');*/

/*
      >> ShortCiruting <<

console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(false || 0);
console.log(0 || false);
console.log(undefined || null);

console.log('---- AND ----');

console.log(3 && 'jonas');
console.log('' && 'jonas');
console.log('jonas' && 'abc');
console.log('abc' && 'jonas');
console.log(true && 0);
console.log(false && 0);
console.log(0 && false);
console.log(undefined && null);
*/

/* 
    >> Nullish Coalesting  (??) <<
  
    same as OR operator but nullish values for are null and undefined only.
    it considers zero and empty string as truthy value;



console.log(0 ?? 'jonas');
console.log('' ?? 'jonas');
console.log(0 ?? null);
console.log(null ?? 0);
console.log(0 ?? null);
console.log(undefined ?? null);

*/

/*
    >> Logical Operators <<


const rest1 = {
  name: "capri",
  numGuests: 0, //or operator will reset it to 10 coz 0 is falsy value whereas nullish operator will not reset it;
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//nullish operator
rest1.numGuests ??= 10;
console.log(rest1, rest2);

//OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1, rest2);

//AND operator
rest2.owner &&= "<Annoymous>"; //same as if(rest2.owner){rest2.owner = '<Annoymous>'};
console.log(rest1, rest2);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for of loop:
for (const item of menu) {
  console.log(item);
}

for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}
*/

/* 
        >> Enhanced Object Literal and Optional Chaining<<


const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //enhanced object literals: objects and method
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// console.log(restaurant);
//with optional chainging
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

//objects
for (const day of days) {
  //   console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderPizza?.(0, 1) ?? "Method does not exist");

//array
// const users = [{ name: "jonas", email: "hello@sdcn.com" }];
const users = [];
console.log(users[0]?.name ?? "User Array empty");
*/

/* 
        >> Looping Objects <<


const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const properties = Object.keys(openingHours); //for properties
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr);

const values = Object.values(openingHours); //for values
console.log(values);

const entries = Object.entries(openingHours); //for whole object
console.log(entries);

for (const [day, { open: fopen, close: fclose }] of entries) {
  console.log(`We open on ${day} at ${fopen} and close at ${fclose}`);
}
*/

/*
      >> SETS << 


const orderSet = new Set([
  "Pizza",
  "Pasta",
  "Pizza",
  "Noodles",
  "Pasta",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
console.log(orderSet.has("Risotto"));
console.log(orderSet.has("Pizza"));
console.log(orderSet["Pizza"]); //undefined
orderSet.add("Risotto");
console.log(orderSet);
orderSet.delete("Pizza");
console.log(orderSet);
console.log(orderSet.size);

//itterable
for (const order of orderSet) console.log(order);

const order = ["Pizza", "Pasta", "Pizza", "Noodles", "Pasta", "Pasta", "Pizza"];
const uniqueOrder = new Set(order); //new set od unique orders
console.log(uniqueOrder);
const unqOrder = [...new Set(order)]; //array or unique orders;
console.log(unqOrder);

const [...uniqueOrderArray] = uniqueOrder; //array or unique orders;
console.log(uniqueOrderArray);

console.log(new Set("jonas"));
*/

/* 
    >> MAPS <<


const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set("1", "Firenze,Italy");
console.log(rest.set("2", "Lisbon, Portugal"));
console.log(
  rest
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("openingHours", {
      open: 11,
      close: 23,
    })
);

console.log(rest.get("name"));
console.log(rest.get("1"));
console.log(rest.get("2"));
console.log(rest.get("categories"));
console.log(rest.get("openingHours"));

console.log(rest.has("openingHours"));
console.log(rest.delete("2"));



const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "java"],
  [3, "javaScript"],
  ["correct", 3],
  [true, "Correct!!!"],
  [false, "Try Again!!!"],
]);
console.log(question);

// console.log(question[0]); //undefined
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const ans = Number(prompt("Your answer"));
// console.log(ans);

// ans === question.get("correct")
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// console.log(question.get(question.get("correct") === ans));

console.log([...question]);
*/

/* 
    >> STRINGS << 

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(`airline:${airline.length} - plane:${plane.length}`);
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("acx".length);
console.log("acx"[0]);

console.log(airline.slice(airline.indexOf(" ") + 1, airline.lastIndexOf(" ")));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("Middle Seat");
  else console.log("You got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23E");
checkMiddleSeat("1A");

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

//returns boolean
console.log(plane.includes("Air"));
console.log(plane.startsWith("A"));
console.log(plane.endsWith("o"));
*/

//split - join    //return array
console.log("a+very+nice+string".split("+"));
console.log("Yashvi Khunt".split(" "));
const [firstName, lastName] = "YASHVI Khunt".split(" ");
console.log(firstName, lastName);
const newName = ["Ms.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
