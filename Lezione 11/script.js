function calcola() {
  let nome = document.getElementById("testo").value;
  let potenza = Number(document.getElementById("numero").value);
  let ore = Number(document.getElementById("orario").value);

  // controlli
  if (nome == "") {
    alert("Il nome del dispositivo non può essere vuoto");
    return;
  }
  if (potenza <= 0) {
    alert("La potenza deve essere maggiore di zero");
    return;
  }
  if (ore < 1 || ore > 24 || ore % 1 != 0) {
    alert("Le ore devono essere un numero intero da 1 a 24");
    return;
  }

  // calcolo
  let consumoOrario = potenza / 1000;
  let consumo = 0;
  let costo = 0;

  for (let i = 1; i <= ore; i++) {
    consumo = consumo + consumoOrario;

    if (i <= 4) {
      costo = costo + consumoOrario * 0.20;
    } else {
      costo = costo + consumoOrario * 0.30;
    }
  }

  // classe di consumo
  let classe = "";
  if (consumo <= 2) {
    classe = "Basso consumo";
  } else if (consumo <= 5) {
    classe = "Medio consumo";
  } else {
    classe = "Alto consumo";
  }

  // risultati
  document.getElementById("Risultato").innerHTML =
    "Dispositivo: " + nome + "<br>" +
    "Consumo: " + consumo.toFixed(2) + " kWh<br>" +
    "Costo: " + costo.toFixed(2) + " €<br>" +
    "Classe: " + classe;
}

function azzera() {
  document.getElementById("testo").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("orario").value = "";
  document.getElementById("Risultato").innerHTML = "I risultati appariranno qui.";
}

document.getElementById("btnCalcola").onclick = calcola;
document.getElementById("btnAzzera").onclick = azzera;
