/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateRandomCard() {
    const symbols = ["♦", "♥", "♠", "♣"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    let randomValue = values[Math.floor(Math.random() * values.length)];

    document.querySelector(".symbolTop").innerText = randomSymbol;
    document.querySelector(".number").innerText = randomValue;
    document.querySelector(".symbolBottom").innerText = randomSymbol;

    if (randomSymbol === "♥" || randomSymbol === "♦") {
      document.querySelector(".symbolTop").style.color = "red";
      document.querySelector(".number").style.color = "red";
      document.querySelector(".symbolBottom").style.color = "red";
    } else {
      document.querySelector(".symbolTop").style.color = "black";
      document.querySelector(".number").style.color = "black";
      document.querySelector(".symbolBottom").style.color = "black";
    }
  }
  function updateCardSize() {
    let width = parseInt(document.getElementById("width").value);
    let height = parseInt(document.getElementById("height").value);

    // Asegurarse de que los valores no sean menores a 100px
    if (width < 100) {
      width = 100;
      document.getElementById("width").value = 100; // Actualizar el input con el valor mínimo permitido
    }

    if (height < 200) {
      height = 200;
      document.getElementById("height").value = 200; // Actualizar el input con el valor mínimo permitido
    }

    // Convertir los valores a px
    const widthPx = width + "px";
    const heightPx = height + "px";

    const card = document.querySelector(".card");
    card.style.width = widthPx;
    card.style.height = heightPx;

    // Ajustar el tamaño del texto proporcionalmente
    const fontSize = Math.min(width, height) * 0.2 + "px";
    document.querySelector(".symbolTop").style.fontSize = fontSize;
    document.querySelector(".number").style.fontSize = fontSize;
    document.querySelector(".symbolBottom").style.fontSize = fontSize;
  }

  document.getElementById("generate").addEventListener("click", () => {
    generateRandomCard();
  });

  setInterval(() => {
    generateRandomCard();
  }, 10000);

  document.getElementById("width").addEventListener("change", updateCardSize);
  document.getElementById("height").addEventListener("change", updateCardSize);

  window.onload = function() {
    generateRandomCard();
  };
};
