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

/* >> CAll and Apply << */

//call  >> multiple values
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

lufthansa.book(234, "Jonas");
lufthansa.book(458, "Martha");

const book = lufthansa.book;

//book(23, 'sarah williams')

book.call(eurowings, 23, "Sarah Williams");
console.log(lufthansa);
console.log(eurowings);

//apply  >> array
const flightData = [586, "George"];
book.apply(eurowings, flightData);
console.log(eurowings.bookings);

book.call(lufthansa, ...flightData);
console.log(lufthansa.bookings);

/* >> Bind << */
const bookEW = book.bind(eurowings, null, "Seven");
bookEW(34);
console.log(eurowings.bookings);
