const greetings = [
  `Hi, I'm <span class="hero">Xhoi</span>.`,
  `Bonjour, je suis <span class="hero">Xhoi</span>.`,
  `Hola, soy <span class="hero">Xhoi</span>.`,
  `Ciao, sono <span class="hero">Xhoi</span>.`,
  `Kon'nichiwa, watashi wa <span class="hero">Xhoi</span> desu.`,
  `Hallo, ich bin <span class="hero">Xhoi</span>.`,
  `Përshëndetje, unë jam <span class="hero">Xhoi</span>.`,
];

const greetingsElements = document.querySelector("#greeting");

function changeGreeting() {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  greetingsElements.innerHTML = greetings[randomIndex];
}

changeGreeting();

setInterval(changeGreeting, 1000);
