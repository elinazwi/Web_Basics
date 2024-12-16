let randomNumber = Math.floor(Math.random()* 6 + 5);

switch (randomNumber) {
    case 10:
        console.log("Ten");
        break;
    case 9:
        console.log("Nine");
        break;
    case 8:
        console.log("Eight");
        break;
    case 7:
        console.log("Seven");
        break;
    case 6:
        console.log("Six");
        break;
    case 5:
        console.log("Five");
        break;
    default:
        console.log("error");
        break;
}

console.log(randomNumber);
