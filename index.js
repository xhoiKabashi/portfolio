const greetings = [
    "Hi, I'm Xhoi.",
    "Bonjour, je suis Xhoi.",
    "Hola, soy Xhoi.",
    "Ciao, sono Xhoi.",
    "Kon'nichiwa, watashi wa Xhoi desu.",
    "Hallo, ich bin Xhoi.",
    "Përshëndetje, unë jam Xhoi." 
]


    const greetingsElements = document.querySelector("#greeting");

    function changeGreeting(){

const randomIndex = Math.floor(Math.random() * greetings.length);
greetingsElements.textContent = greetings[randomIndex];
    }

    changeGreeting();

    setInterval(changeGreeting, 1000);


