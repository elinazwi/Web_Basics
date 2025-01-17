//Aufgabe 1
/*Erstelle eine Funktion Decider. Decider erwartet 2 Argumente - eine Zahl und eine Callback-Funktion.

Wenn die Zahl > 100 ist, dann rufe die Callbackfunktion auf. Ansonsten nicht.*/

/*function Decider(number, callback) {
    console.log("Ich mache etwas...");
    if (number>100) {
        callback(callbackFunktion)
    } else {
        console.log("error");
        console.log(random);
        
        
    }
}

function callbackFunktion() {
    console.log("Callback wurde ausgeführt! Die Nummer ist: " + random);
}

let randomNumber = Math.random() * 150;
let random = Math.floor(randomNumber);

Decider(random, callbackFunktion);*/

//Aufgabe 2
/*Die Funktion orderPizza nimmt den Namen der Pizza und einen Callback entgegen. 
Sie simuliert das Bestellen der Pizza.Wenn die Pizza fertig ist wird der Callback aufgerufen. 
Dem Callback wird ein zufälliger Preis mitgegeben.*/

function makePizza(pizzaName, callback) {
    console.log("Ihre Pizza wird vorbereitet, bitte warten Sie 5 Sekunden!");
    
    // Simuliere eine Zeitverzögerung (z. B. für einen Netzwerkdownload)
    setTimeout(function () {
        console.log("Ihre Pizza wird gerade in den Ofen geschoben");
        callback(pizzaName); // Rufe die Callback-Funktion auf, nachdem der Download abgeschlossen ist
    }, 5000); // 

}

function finishedPizza(pizzaName, price) {
    console.log("Ihre Pizza " + pizzaName + " ist fertig und kostet " + price + "Euro.");
}

let randomPrice = Math.random() * 20;
let price = Math.floor(randomPrice);
// Starte den Ablauf
makePizza("Pizza Salami", finishedPizza);