console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <= 100, i+=2){
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100, i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }else if (i % 3 == 0){
        console.log("FIZZ");
    }else if (i % 5 == 0){
        console.log("BUZZ");
    }
}

Exercise 3

let i = 1;
do { 
console.log(i);
i+=2;
} while (i <= 100);

let i = 1;
while (1 <= 100){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZ");
    }else if (i % 3 == 0){
        console.log("FIZZ");
    }else if (i % 5 == 0){
        console.log("BUZZ");
    }
    i++;
}

let i = 1; 
do {
    console.log(i);
    i++
} while  (i <= 100)

let i = 1;
while (1 <= 100){
    if (i % 3 == 0)
    console.log(i);
    i+=2
}



Exercise 4

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++){
    if (i == value){
        console.log("Found value!");
        break;
    }
}
console.log("Did not find value");

Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1); 

for (let i = start; i <= end; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(i, "FIZZBUZ");
    }else if (i % 3 == 0){
        console.log(i, "FIZZ");
    }else if (i % 5 == 0){
        console.log(i, "BUZZ");
    }
}