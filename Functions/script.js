"use strict";
/*

    >>  DEFAULT PARAMETERS  <<
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2);*/

/* 
        >> Value vs Reference <<

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 48398475923,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 48398475923) {
    alert("CHECKED IN!!!");
  } else {
    alert("WRONG PASSPORT!!!");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);
*/

/* 
    >>    Higher order functions  <<


// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transform = function (str, fn = upperFirstWord) {
  // console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  // console.log(`Transformed by: ${fn.name}`);
};

// transform("javaScript is the best!", upperFirstWord);
// transform("javaScript is the best!", oneWord);
const newfn = function () {
  transform("HEy Jonas");
  // console.log("HII");
};

// document.body.addEventListener("click", newfn);

["jonas", "martha", "adam"].forEach(newfn);
*/

/*  
    >> Function Returning <<

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");
greet("Hello")("Jonas");



const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greetDup = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetDup("Hiee")("Martha");
greet("hello")("Adam");
*/

/* >> CAll and Apply << 

//call  >> multiple values
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log("flightNUm: ", flightNum, "name: ", name);
    // console.log(
    //   `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    // );
    // this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// lufthansa.book(234, "Jonas");
// lufthansa.book(458, "Martha");

const book = lufthansa.book;

//book(23, 'sarah williams')

// book.call(eurowings, 23, "Sarah Williams");
// console.log(lufthansa);
// console.log(eurowings);

// //apply  >> array
// const flightData = [586, "George"];
// book.apply(eurowings, flightData);
// console.log(eurowings.bookings);

// book.call(lufthansa, ...flightData);
// console.log(lufthansa.bookings);

/* >> Bind << */

// const bookEW = book.bind(eurowings, (null, "seven"));
// bookEW(23);
// console.log(bookEW);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Martha");

// const neArr = [23, null];
// const bookarr = book.bind(eurowings, neArr);
// bookarr("sarah");

//event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// //document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); //return NaN because this points to button

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

/*
//bind method
const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

//returning function
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTax(0.23);
console.log(addVAT(100));
*/

/* >> IIFE - immediately invoked function expression << 
(function () {
  console.log("Never invoked again");
})();

(() => console.log("Mee too"))();
*/

/* CLOSUERS 

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

booker();
booker();
booker();



let f;
const g = function () {
  //object
  const jonas = {
    name: "jonas",
    new() {
      console.log("Objext > method");
    },
  };

  //method
  const newMethod = function () {
    console.log("methods");
  };

  const a = 10;
  f = function () {
    // newMethod();
    // console.log(jonas.name);
    // jonas.new();
    console.log(a);
  };
};

const h = function () {
  const b = 12;
  f = function () {
    console.log(b);
  };
};
g();
h(); //re-assingning
f();


const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  //callback function
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};
const perGroup = 198;
boardPassengers(180, 3);
*/
