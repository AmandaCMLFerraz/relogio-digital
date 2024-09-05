// Seleção dos elementos HTML
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Função ckock para atualizar o relógio
function clock() {
    let now = new Date(); // Criação de um objeto que contem data e horas atuais
    let hour = now.getHours(); // Variável para armazenar as horas extraida do objeto Date
    let minute = now.getMinutes(); // Variável para armazenar os minutos extraida do objeto Date
    let second = now.getSeconds(); // Variável para armazenar os segundos extraida do objeto Date

    // Inserindo os valores dessas variáveis no HTML
    hours.innerHTML = fixZero(hour);
    minutes.innerHTML = fixZero(minute);
    seconds.innerHTML = fixZero(second);
};

// Função para garantir que as horas, minutos e segundos tenham sempre 2 dígitos
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
};

// Atualização automática executando a função clock a cada 1 segundo
setInterval(clock, 1000);