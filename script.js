// Konami Code sequence
const konamiCode = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a"
];

let konamiPosition = 0;

document.addEventListener("keydown", function(e) {
  const key = e.key;
  const requiredKey = konamiCode[konamiPosition];

  if (key === requiredKey) {
    konamiPosition++;

    // Full code entered
    if (konamiPosition === konamiCode.length) {
      activateEasterEgg();
      konamiPosition = 0; // reset
    }
  } else {
    konamiPosition = 0; // reset if wrong key
  }
});

function activateEasterEgg() {
  // Show hidden message
  const secret = document.createElement("div");
  secret.textContent = "🚀 Congrats! You found the hidden SRM Easter Egg 🎉";
  secret.style.position = "fixed";
  secret.style.bottom = "20px";
  secret.style.right = "20px";
  secret.style.padding = "15px 20px";
  secret.style.background = "#ffd700";
  secret.style.color = "#000";
  secret.style.fontWeight = "bold";
  secret.style.borderRadius = "10px";
  secret.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  document.body.appendChild(secret);

  // auto hide after 5 sec
  setTimeout(() => {
    secret.remove();
  }, 5000);
}
