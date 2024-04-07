//practice 3
let score = prompt("Enter Score:");
let grade;
if (score >= 90 && score <= 100){
grade = "A";
}
else if (score >= 70 && score <= 89){
grade = "B";
}
else if (score >=60 && score <=69){
grade =  "C";
}
else if(score >=50 && score<=59){
rade = "D";
}
else if(score >=0 && score<=49){
grade = "F"; 
} else {
    console.log("Invalid input");
}
console.log(grade);