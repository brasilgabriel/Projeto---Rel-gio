let paragrafo = document.querySelector('p');


function preencheZero(numero) {
    return ('0' + numero).slice(-2);
};

setInterval(() => {
    paragrafo.innerHTML = '';

    let data = new Date();

    paragrafo.innerHTML = `${preencheZero(data.getDate())}/${preencheZero(data.getMonth() + 1)}/${preencheZero(data.getFullYear())} 
    ${preencheZero(data.getHours())}:${preencheZero(data.getMinutes())}:${preencheZero(data.getSeconds())}`;

}, 1000)