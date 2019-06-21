let botao = document.querySelector("button"); //define a variavel botao

function validarBtn() { //verifica se os campos estam preenchidos
    if (altura.value == "") {
        altura.focus(); //reenvia o cursor para o campo em falta
        return false;
    }else if (peso.value == "") {
        peso.focus(); //reenvia o cursor para o campo em falta
        return false;
    }else botao.addEventListener("click", function(){ //após verificar passa ao evento seguinte - clicar no botão
   
        function calcularImc(peso , altura) { //função para calcular o imc com as variaveis declaradas entre parentesis
            
            altura = document.getElementById("altura").value; //define a variavel altura
            peso = document.getElementById("peso").value; //define a variavel peso
        
            return (peso / (altura * altura)); //retorna o resultado do calculo
        }
        let resultado = calcularImc(); //armazena o valor retornado na variavel resultado
        let imc = parseFloat(resultado.toFixed(2)); //define a variavel imc apenas com duas casas decimais da variavel resultado

        botao.style.display = 'none';  //remove o botão

        let valor = document.querySelector("span"); //define a variavel valor e associa ao campo html span
        valor.innerHTML = imc;  //insere o valor imc no elemento span, tornando-o visivel na tela
    
        function descricao() {  //define os intrevalos de valor de imc e a mensagem a exibir
            if (imc < 16) {
                return "Magreza Grave"
            } else if ((16 <= imc) && (imc < 17)) {
                return "Magreza Moderada"
            } else if ((17 <= imc) && (imc < 18.5)) {
                return "Magreza Leve"
            } else if ((18.5 <= imc) && (imc < 25)) {
                return "Saudável"
            } else if ((25 <= imc) && (imc < 30)) {
                return "Sobrepeso"
            } else if ((30 <= imc) && (imc < 35)) {
                return "Obesidade"
            } else if ((35 <= imc) && (imc < 40)) {
                return "Obesidade Severa"
            } else if (imc >= 40) {
                return "Obesidade Mórbida"
            }
        };
        
        let texto = document.querySelector("small");  //define a variavel text e associa ao elemento small
        texto.innerHTML = descricao();  //insere a mensagem no elemento small e exibe-a na tela
    });
    
}