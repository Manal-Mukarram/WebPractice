/*

The program will take roll number as an input

Then it will show the student their section

The students are divided into section like: 
    Section A - 1-43
    Section B - 44-86
    Section C - 86-121
    Section D - 121-256
    Section E - 256-298
    Section F - 298-343
    Section G - 343-401

Define a function that will return the section after taking roll number as an argument
It must be done using the function.

Example:
    the student entered roll no: 115
    the output will be: 
        "You are in Section C"
*/
let atom = function (roll_no) {
  if (roll_no <= 43) {
    return;
    console.log("You are in Section A");
  } else if (roll_no <= 86 && roll_no >= 44) {
    return;
    console.log("You are in Section B");
  } else if (roll_no <= 121 && roll_no >= 86) {
    return;
    console.log("You are in Section C");
  } else if (roll_no <= 256 && roll_no >= 121) {
    return;
    console.log("You are in Section D");
  } else if (roll_no <= 298 && roll_no >= 256) {
    return;
    console.log("You are in Section E");
  } else if (roll_no <= 343 && roll_no >= 298) {
    return;
    console.log("You are in Section F");
  } else if (roll_no <= 401 && roll_no >= 343) {
    return;
    console.log("You are in Section G");
  } else {
    return;
    console.log("There is no such roll number..");
  }
};
let roll_no = prompt("enter roll number");
roll_no = Number.parseInt(roll_no);
let result = atom(roll_no);
console.log("Your section is " + result);
