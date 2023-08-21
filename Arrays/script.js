"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/*// DOM Manuplation
//create fn - displaymovements - dyanamic entry of all transactions
*/
const displaymovements = function (movements) {
  // console.log(movements);
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    // console.log(mov);
    const type = mov >= 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}₹</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displaymovements(account1.movements);

// ----- Computing UserName -----

//step:1 create fn for creating username for one element
// const owner = "Jonas Schmedtmann";
// const username = owner
//   .toLowerCase()
//   .split(" ")
//   .map((val) => val[0])
//   .join("");
// console.log(username);*/
//step:2 iterate fn for all users
const createUsername = function (accArray) {
  accArray.forEach((acc) => {
    return (acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((val) => val[0])
      .join(""));
  });
};

//step:3 add properties to the object;
createUsername(accounts);
// console.log(accounts);

// ----- display current Balance -----
const calcBalance = function (acc) {
  acc.balance = acc.movements.reduce((accumulator, val) => accumulator + val);
  labelBalance.textContent = `${acc.balance}₹`;
};

// calcBalance(account1.movements);

// ----- display summary -----
const calcSummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((accumulator, val) => accumulator + val, 0);

  labelSumIn.textContent = `${incomes}₹`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((accumulator, val) => accumulator + val, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}₹`;

  //bank pays interest on every deposit only if interest is greater than 1

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest}₹`;
};
// calcSummary(account1.movements);
let currentUser;
const updatedUI = function (acc) {
  //display movements
  displaymovements(acc.movements);
  //display balance
  calcBalance(acc);
  //display summary
  calcSummary(acc);
};

//  ----- Login User -----

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  //get current user
  currentUser = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currentUser);
  //check pin
  if (currentUser?.pin === Number(inputLoginPin.value)) {
    //display ui & message
    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    inputLoginUsername.blur();
    updatedUI(currentUser);
  } else {
    alert("Enter Correct UserName or Password");
  }
});

// ----- Transfer Money Process -----

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  //get user to which transfer occurs
  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(recieverAcc);
  //amount to transfer
  const amount = Number(inputTransferAmount.value);
  console.log(`transfer to ${recieverAcc.owner}: ${amount}`);

  //clear inp fields
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
  inputTransferTo.blur();

  //check enough money and reciever account exist and not equal to self
  if (
    amount > 0 &&
    recieverAcc &&
    amount <= currentUser.balance &&
    recieverAcc?.username !== currentUser.username
  ) {
    //add negative movement to curr
    currentUser.movements.push(-amount);
    //add positive movement to reciever
    recieverAcc.movements.push(amount);
    //show updated ui
    updatedUI(currentUser);
  }
});

// ----- Close Account -----
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  //check credentials
  if (
    inputCloseUsername.value === currentUser.username &&
    Number(inputClosePin.value) === currentUser.pin
  ) {
    //delete
    const index = accounts.findIndex(
      (acc) => acc.username === currentUser.username
    );
    console.log(`index: ${index}`);
    accounts.splice(index, 1);
    //hide ui
    containerApp.style.opacity = 0;
  }

  // clear inp fields
  inputClosePin.value = inputCloseUsername.value = "";
  inputClosePin.blur();
  inputCloseUsername.blur();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ["a", "b", "c", "d", "e"];

//slice - creates new array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, 2));
console.log(arr.slice(-5, 2));
console.log(arr);

console.log(`[...arr] same as arr.slice()`);

//splice - change original array
const arr2 = arr.splice(2);
console.log(arr2);
console.log(arr);

//reverse
const arr3 = ["e", "d", "c", "b", "a"];
console.log(`${arr3} - ${arr3.reverse()} - ${arr3}`);

//concat
const letters = arr.concat(arr2);
console.log(letters, arr, arr2);
console.log(`arr.concat(arr2) is same as [...arr,...arr2]`);

//join
console.log(letters.join("-"));

//AT method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.at(-1));


//    >> For Each <<


array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const mov of movements) {
  console.log(`${mov > 0 ? "You Deposited" : "You Withdrew"} ${Math.abs(mov)}`);
}
console.log("--- FOR EACH ---");
movements.forEach(function (element, index, array) {
  // console.log(`${mov > 0 ? "You Deposited" : "You Withdrew"} ${Math.abs(mov)}`);
  console.log(`${element}-${index}-${array.join(" ")}`);
});


//map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//set
const currenciesUnique = new Set(["USD", "EUR", "GBP"]);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${value} - ${key} - ${set.size}`);
});
*/

/*  >>  Map - Filter - Reduce  <<
// MAP method:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const convertUSD = 9;
const movementsUSD = movements.map((mov) => mov * convertUSD);
console.log(movements, movementsUSD);

const movementDetails = movements.map((mov, i) => `Movement:${i}-${mov}`);
console.log(movementDetails);
console.log(...movementDetails);

//FILTER METHOD
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);
const withdrawls = movements.filter((mov) => mov < 0);
console.log(withdrawls);

//Reduce Method
const balance = movements.reduce((accumulator, val, i) => accumulator + val);
console.log(balance);
*/

/*
// FIND method  -- returns 1st true element
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.find((mov) => mov < 0));

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
*/

//Find Index - returns first index of the element
