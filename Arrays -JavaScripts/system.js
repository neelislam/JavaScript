//arrays

let bikebrand = ["Suzuki","TVS", "Yamaha", "Honda"]; //string array
let array2 = [6,7,8,9,10];  //number array
let infoArray = ["Neel Islam", 120,"CSE"];
let array4 = [16,17,18,19,20];
let mark = [21,22,23,24,25];

console.log(bikebrand);
console.log(infoArray);
console.log(array2.length); ////length of array
console.log(infoArray.length); //length of array
console.log("type of array is object");
console.log(typeof infoArray); //type of array is object

//acess value using index

console.log(infoArray[0]);
console.log(infoArray[1]);
console.log(infoArray[2]);
console.log(infoArray[3]); // will show undefined which is not existing in array
console.log("How to replace an element in array");
infoArray[0]= "UPPUL THARANGA";
infoArray[1]= "one hundred and twenty";
console.log(infoArray[0]);
console.log(infoArray[1]);
console.log(infoArray[2]);

console.log("String is immutible, Array is mutable");
console.log("\n looping over array");

for(let i=0;i<bikebrand.length;i++){
    console.log(bikebrand[i]);
}
let Brands = ["Aplle", "Xiaomi", "Nokia", "Realme", "Samsung"];
for(let brand of Brands){
    console.log(brand.toUpperCase());
}


//avg mark
let sum =0;
for(i=0;i<mark.length;i++){
    sum = sum +mark[i]
}
let resAvg = sum / mark.length;
console.log(resAvg);

//percantage off
let indx = 0;
let price = [100,200,300,400,500]
for(let val of price){ 
    console.log(`value at indx ${indx+1} = ${val}`);
    let offer = val / 10;
    price[indx] = price[indx] - offer;
    console.log(`Price after 10% off is: ${price[indx]}`)
    indx++;
}

//array methods
//push() <- add something at end, pop() <-delete from end. toString() <-delete from.....    ;
//push(); at end
let fooditem =  ["Apple", "Banana", "Orange"];
fooditem.push("Naga", "Chips");
console.log(fooditem);




//pop()
let fooditem1 =  ["Apple", "Banana", "Orange"];
fooditem1.pop();
console.log(fooditem1);

let fooditem2 =  ["Apple", "Banana", "Orange"];
let deletedItem=fooditem2.pop();
console.log("Deleted item-",deletedItem);


//toString() ->Conver an array to string'
let fooditem3 =  ["Apple", "Banana", "Orange"];
fooditem3.toString();
console.log(fooditem3);

//concat()  joins multiple arrays and return result
let marvel = ["Thor", "Iron man", "America"]
let dc = ["Super man",  "Batman"]

let heros = marvel.concat(dc)

console.log(heros);



//unshift methot // works like push and pop (fifo)
let marvel1 = ["Thor", "Iron man", "America"]
let dc2 = ["Super man",  "Batman"]
//slice
let heros1 = marvel1.shift("yo")
console.log(marvel1);
console.log(marvel1.slice(1,2));
//splice
let array98 = [1,2,3,4,4,5,6,77,8]
array98.splice(1,4,6);
console.log(array98);