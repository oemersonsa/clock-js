const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

// Função para atualizar o modo de exibição e o texto do botão de alternância
const updateMode = (darkMode) => {
    body.classList.toggle("dark", darkMode);
    modeSwitch.textContent = darkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", darkMode ? "Dark Mode" : "Light Mode");
};

// Verificar o modo salvo no localStorage
const savedMode = localStorage.getItem("mode");
if (savedMode === "Dark Mode") {
    updateMode(true);
}

// Adicionar listener para alternar o modo
modeSwitch.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark");
    updateMode(isDarkMode);
});

// Função para atualizar o tempo
const updateTime = () => {
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = ((date.getHours() % 12) / 12) * 360 + ((date.getMinutes() / 60) * 30); // Adicionado ajuste para a mão das horas

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// Iniciar o intervalo de atualização do tempo
setInterval(updateTime, 1000);

// Chamar a função para atualizar o tempo inicialmente
updateTime();
