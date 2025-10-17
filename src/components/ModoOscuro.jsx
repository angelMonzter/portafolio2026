import React, { useState } from "react";

export default function ModoOscuro() {
  const [visible, setVisible] = useState(false);
  const [frase, setFrase] = useState("");

  const frases = [
    "🦇 Modo oscuro próximamente… cuando salga de la cueva 🕳️",
    "💤 Shhh… el modo oscuro está dormido.",
    "😎 No hay modo oscuro, solo estilo claro brillante."
  ];

  const mostrarPopup = () => {
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    setFrase(randomFrase);
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  };

  return (
    <div className="modo-oscuro-container">
      <span id="modoOscuroBtn" onClick={mostrarPopup}>
        <i className="fa-solid fa-moon"></i>
      </span>

      {visible && (
        <div id="popupModoOscuro" className="popup-mostrar">
          <p>{frase}</p>
        </div>
      )}
    </div>
  );
}
