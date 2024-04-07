//print function
console.log("Lets Start JavScript");

//integer, float or any variable
age = 17.5;
console.log(age);

//if else condition
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}


//string variable
name = "Tony Stark";
console.log(name);


//Null value
var age = null;
console.log(age);

//undefined value
y = undefined;
console.log(y); 



//boolean variable
isFollower = false;
console.log(isFollower);
isFollower = true;
console.log(isFollower);

//var let const variable
//var is changeable
var age = 24;
var age = 54;
var age = 60;
console.log(age);

//let let fixed the variable but can be update later
//let age = 24;
//age = 54;
//console.log(age);

//cons fixed the variable
//const age = 24;
//console.log(age);


//block code isolated from the wghole code
{
    let age = 55;
    age = 20;
    console.log(age);
}

//data type
//number. string, boolean, undefined, null, number
let price = 100;
console.log(price);
// Big int
y = BigInt("300");
console.log(typeof y); // will show n in the last



//project for product
const product = {
    title: "Parker Ball pen",
    rating : 4,
    offer : 5,
    price : 100,
    description : "Parker Ball pen is the best ball pen in the world"
};


//how string and number is diffrent 
h =  "123" + 1;
console.log(h);
k= "abc" + 1;
console.log(k);

j= 123 + 1;
console.log(j);


//l= abc + 1;
//consol3.log(l);  <- abc not defined



//project 2
const profile = {
    usernames :"@Neel_Islam",
    isFollower: false,
    postsCount: 196,
    followersCount: 1000,
    followingCount: 1000,
    bio: "I am Neel Islam"
};
console.log(profile);
console.log(profile.usernames);
console.log(profile.isFollower);
console.log(typeof profile["postsCount"]); //<- check individual data type insite an object or do anything 
