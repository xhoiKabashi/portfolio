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
let lastRandomIndex = -1;

function getRandomIndex() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * greetings.length);
  } while (randomIndex === lastRandomIndex);
  lastRandomIndex = randomIndex;
  return randomIndex;
}

function changeGreeting() {
  const randomIndex = getRandomIndex();
  greetingsElements.innerHTML = greetings[randomIndex];
}

changeGreeting();

setInterval(changeGreeting, 1000);
