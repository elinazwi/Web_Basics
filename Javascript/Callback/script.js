/*function machEtwas(späterAusführen) {
    console.log("Ich mache etwas...");
    späterAusführen(); // Hier wird die Callback-Funktion ausgeführt
}

function meineCallbackFunktion() {
    console.log("Callback wurde ausgeführt!");
}

machEtwas(meineCallbackFunktion);*/


function downloadDatei(dateiName, callback) {
    console.log(`Start des Downloads von ${dateiName}...`);
    
    // Simuliere eine Zeitverzögerung (z. B. für einen Netzwerkdownload)
    setTimeout(function () {
        console.log(`${dateiName} wurde heruntergeladen.`);
        callback(dateiName); // Rufe die Callback-Funktion auf, nachdem der Download abgeschlossen ist
    }, 3000); // 

}

function verarbeiteDatei(dateiName) {
    console.log(`Verarbeite die Datei: ${dateiName}`);
}

// Starte den Ablauf
downloadDatei("wichtigesDokument.pdf", verarbeiteDatei);
