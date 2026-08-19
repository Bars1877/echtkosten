function showCalculator(name) {
  document.getElementById("calculatorTitle").innerHTML = "💰 " + name + " – Kostenrechner";
}

function berechnen() {
  const einmalig = Number(document.getElementById("einmalig").value);
  const monatlich = Number(document.getElementById("monatlich").value);
  const jaehrlich = Number(document.getElementById("jaehrlich").value);
  const zusatz = Number(document.getElementById("zusatz").value);
  const rabatt = Number(document.getElementById("rabatt").value);

  const laufzeitTyp = document.getElementById("laufzeitTyp").value;
  let laufzeit = Number(document.getElementById("laufzeit").value);

  if (laufzeitTyp === "jahre") {
    laufzeit = laufzeit * 12;
  }

  const kostenMonatlich = monatlich * laufzeit;
  const kostenJaehrlich = jaehrlich * (laufzeit / 12);
  const rabattBetrag = (einmalig + zusatz) * (rabatt / 100);

  const gesamt = einmalig + zusatz + kostenMonatlich + kostenJaehrlich - rabattBetrag;
  const durchschnittMonat = gesamt / laufzeit;
  const durchschnittJahr = gesamt / (laufzeit / 12);

  document.getElementById("result").innerHTML = `
    <div class="result-box">
      <div class="big">${gesamt.toFixed(2)} €</div>

      <div class="result-grid">
        <div class="result-item">
          <small>Monatlich</small>
          <strong>${durchschnittMonat.toFixed(2)} €</strong>
        </div>

        <div class="result-item">
          <small>Jährlich</small>
          <strong>${durchschnittJahr.toFixed(2)} €</strong>
        </div>

        <div class="result-item">
          <small>Rabatt</small>
          <strong>${rabattBetrag.toFixed(2)} €</strong>
        </div>
      </div>
    </div>
  `;
}
