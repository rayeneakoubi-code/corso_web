document.getElementById("calcola").addEventListener("click", function () {
 
    // 1. Leggo i dati
    let modello = Number(document.getElementById("modello").value);
    let ruote = Number(document.getElementById("ruote").value);
    let quantita = Number(document.getElementById("quantita").value);
    let consegna = Number(document.querySelector("input[name='consegna']:checked").value);
    let promo = document.getElementById("promo").value.trim().toUpperCase();
 
    // 2. Accessori: sommo quelli selezionati
    let accessori = 0;
    let listaAccessori = [];
    let caselle = ["casco", "luci", "borraccia"];
    for (let i = 0; i < caselle.length; i++) {
        let c = document.getElementById(caselle[i]);
        if (c.checked) {
            accessori = accessori + Number(c.value);
            listaAccessori.push(caselle[i]);
        }
    }
 
    // 3. Controllo la quantità
    if (quantita < 1) {
        document.getElementById("risultato").innerHTML = "Inserisci una quantità di almeno 1.";
        return;
    }
 
    // 4. Calcoli
    let prezzoBici = modello + ruote + accessori;
    let subtotale = prezzoBici * quantita;
    let sconto = 0;
    let messaggioPromo = "Nessun codice";
 
    if (promo === "SCONTO10") {
        sconto = subtotale * 0.10;
        messaggioPromo = "SCONTO10 (-10%)";
    } else if (promo !== "") {
        messaggioPromo = "Codice non valido";
    }
 
    let totale = subtotale - sconto + consegna;
 
    // 5. Mostro il riepilogo (senza ricaricare la pagina)
    let testoAccessori = "nessuno";
    if (listaAccessori.length > 0) {
        testoAccessori = listaAccessori.join(", ");
    }
 
    document.getElementById("risultato").innerHTML =
        "<h2>Riepilogo preventivo</h2>" +
        "<p>Modello: " + modello + " €</p>" +
        "<p>Ruote: " + ruote + " €</p>" +
        "<p>Accessori (" + testoAccessori + "): " + accessori + " €</p>" +
        "<p>Prezzo di una bici: " + prezzoBici + " €</p>" +
        "<p>Quantità: " + quantita + "</p>" +
        "<p>Subtotale: " + subtotale.toFixed(2) + " €</p>" +
        "<p>Promo: " + messaggioPromo + " → sconto " + sconto.toFixed(2) + " €</p>" +
        "<p>Consegna: " + consegna + " €</p>" +
        "<h2>TOTALE: " + totale.toFixed(2) + " €</h2>";
});
 