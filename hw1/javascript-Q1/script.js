/* ----------Q1-----------------*/

let age1 = 20;
let age2 = 30;

if (age1 > age2) {
  console.log(age1);
} else {
  console.log(age2);
}

/* -----------Q2------------------- */

let input1 = Number(prompt("لطفا عدد را وارد کنین"));
if (input1 % 2 === 0) {
  console.log("این عدد زوج است");
} else {
  console.log("این عدد فرد است");
}

 /*-------------Q3----------------- */

let username = prompt("inter your number");
if (isNaN(username)) {
  console.log("این ورودی عدد نیست");
} else {
  console.log("این ورودی عدد است");
}

/* -------------Q4---------------*/

let data1 = +prompt("value1")
data1 = +prompt("value2");
data1 = +prompt("value3");

if (data1 > data2 && data1 < data3) {
  console.log("عدد داده شده در محدوده تعیین شده است");
} else {
  console.log("عدد وارد شده در محدوده تعیین شده نیست");
}

/* ----------------------Q5-----------------*/

for (let i = 0; i <= 15; i++) i % 2 === 0;
console.log(i + " : عدد زوج است");
console.log(i + " : عدد فرد است");

/*----------------Q6---------------*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


