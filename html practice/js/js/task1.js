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
const getRollNo = (roll_no) => {
  if (roll_no <= 43) {
    return "A";
  } else if (roll_no <= 86 && roll_no >= 44) {
    return "B";
  } else if (roll_no <= 121 && roll_no >= 86) {
    return "C";
  } else if (roll_no <= 256 && roll_no >= 121) {
    return "D";
  } else if (roll_no <= 298 && roll_no >= 256) {
    return "E";
  } else if (roll_no <= 343 && roll_no >= 298) {
    return "F";
  } else if (roll_no <= 401 && roll_no >= 343) {
    return "G";
  } else {
    return "NONE";
  }
};
let roll_no = prompt("enter roll number");
roll_no = Number.parseInt(roll_no);
let result = getRollNo(roll_no);
alert(`You are in Section ${result}`);
