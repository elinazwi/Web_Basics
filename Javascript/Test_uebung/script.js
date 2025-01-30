let sum = 0;

for (let index = 7; index < 344; index++) {
    if (index % 12 == 0) {
        sum += index*3
    } else if (index % 2 == 0){
        sum+=index
    }
}

console.log(sum);


//Aufgabe 2

let data = "Super Duper";
let result = "";

for (let i = 0; i < data.length; i++) {
    if ((data[i] == "u") || (data[i] == "e")) {
        result += "x"; 
    } else {
        result += data[i];
    }
}

console.log(result);


//Aufagbe 3
let num = 100;

while (num >= 25) {
    if ((num != 50) && (num != 40) && (num != 30)) {
        console.log(num);
    }
    num -= 5;
}
