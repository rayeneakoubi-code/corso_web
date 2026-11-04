const modulo = document.getElementById("modulo");
const riepilogo = document.getElementById("riepilogo");

modulo.addEventListener("submit", function (e) {
    e.preventDefault(); // la pagina non si ricarica

    const nome = document.getElementById("nome").value;
    const eta = document.getElementById("eta").value;
    const corso = document.getElementById("corso").value;
    const note = document.getElementById("note").value;

    // radio: prendo quello selezionato
    const modalita = document.querySelector('input[name="modalita"]:checked');

    // checkbox: prendo tutti quelli selezionati
    const attivita = document.querySelectorAll('input[name="attivita"]:checked');
    let listaAttivita = [];
    attivita.forEach(function (a) {
        listaAttivita.push(a.value);
    });

    riepilogo.innerHTML =
        "<p><b>Nome:</b> " + nome + "</p>" +
        "<p><b>Età:</b> " + eta + "</p>" +
        "<p><b>Corso:</b> " + corso + "</p>" +
        "<p><b>Modalità:</b> " + (modalita ? modalita.value : "Non scelta") + "</p>" +
        "<p><b>Attività:</b> " + (listaAttivita.length > 0 ? listaAttivita.join(", ") : "Nessuna") + "</p>" +
        "<p><b>Note:</b> " + note + "</p>";
});