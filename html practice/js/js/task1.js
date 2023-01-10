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



let roll_no = prompt("enter roll number");
roll_no = Number.parseInt(roll_no)
if (roll_no <= 43){ 
console.log("You are in Section A");
}
else if (roll_no <= 86 && roll_no >= 44){ 
console.log("You are in Section B");
}
else if (roll_no <= 121 && roll_no >= 86){ 
console.log("You are in Section C");
}
else if (roll_no <= 256 && roll_no >= 121){ 
console.log("You are in Section D");
}
else if (roll_no <= 298 && roll_no >= 256){ 
console.log("You are in Section E");
}
else if (roll_no <= 343 && roll_no >= 298){ 
console.log("You are in Section F");
}
else if (roll_no <= 401 && roll_no >= 343){ 
console.log("You are in Section G");
}
else {
    console.log("There is no such roll number..")
}
// console.log(typeof roll_no)

