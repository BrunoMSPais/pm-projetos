//var peso = document.querySelector('.peso');

//var altura = document.querySelector('.altura');

var peso = document.getElementsByClassName('peso');

var altura = document.getElementsByClassName('altura');

var botao = document.getElementsByClassName('botao');

var imc = peso / (altura * altura)

function habilitarBtn() {
    var pesoIn = document.getElementsByClassName('peso').require;
    var alturaIn = document.getElementsByClassName('altura').require;

    if (pesoIn = Number)
        if (!document.getElementById('imc').disabled) document.getElementById('imc').disabled = false;

    if (alturaIn = Number)
        if (!document.getElementById('imc').disabled) document.getElementById('imc').disabled = false;
}
var btn = document.getElementsByClassName('btn');

bnt.addEventListener('click', ocultar)

function ocultar() {
    this.style.display = 'none'
}

if (imc < 16) {
    document.querySelector('.texto') == "Magreza grave";
    alert(imc, 'Magreza grave');
}

if (16 = < imc < 17) {
    document.querySelector('.texto') == "Magreza moderada";
    alert(imc, 'Magraza moderada');
}

if (17 = < imc < 18.5) {
    document.querySelector('.texto') == "Magreza leve";
    alert(imc, 'Magreza leve');
}

if (18.5 = < imc < 25) {
    document.querySelector('.texto') == "Saudável";
    alert(imc, 'Saudável');
}

if (imc = 25, imc < 30) {
    document.querySelector('.texto') == "Sobrepeso";
    alert(imc, 'Sobrepeso');
}

if (imc = 30, imc < 35) {
    document.querySelector('.texto') == "Obesidade";
    alert(imc, 'Obesidade');
}

if (imc = 35, imc < 40) {
    document.querySelector('.texto') == "Obesidade Grave";
    alert(imc, 'Obesidade Grave');
}

if (imc = 40, imc > 40) {
    document.querySelector('.texto') == "Obesidade mórbida";
    alert(imc, 'Obesidade mórbida');
}
