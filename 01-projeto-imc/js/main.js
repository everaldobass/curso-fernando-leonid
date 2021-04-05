//Caluculadora de IMC
const calcular = document.getElementById("calcular");
//Função chama o evento click
function imc(){

    //Criar as variaveis dentro da função
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
   

    //Validar se o nome está preenchido
    if(nome != "" && altura !== "" && peso !== ""){


        // Calculando o valorIMC.
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = ""; //Situação da Obsidade da pessoa

        if(valorIMC < 18.5){
            classificacao = "abaixo do peso. Cuide-se!";

        }else if(valorIMC < 25){

            classificacao = "seu peso está ideal. Parabéns!";

        }else if(valorIMC < 30){
            classificacao = "Você está levimente acima do erro!!";

        }else if(valorIMC < 35){
            classificacao = "com obesidade grau I. Cuidado com a alimentação.";

        }else if(valorIMC < 40){
            classificacao = "com obsidade grau II. Pratique espostes!";

        }else if(valorIMC){
            classificacao = "com obsidade grau III, Cuidado! ";
        }

        resultado.textContent = `${nome} seu IMC é  ${valorIMC} é você está ${classificacao}`;
      
    }else{

        resultado.textContent = "Preencha todos os campos! ";
    }

}

calcular.addEventListener('click', imc);

