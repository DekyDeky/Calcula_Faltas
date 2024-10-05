let QuatroOuDois = 2, totalFaltas, diasRestantes;
console.log(QuatroOuDois)

quatro_aulas_botao.addEventListener("click", function() {
    QuatroOuDois = 0;
});

duas_aulas_botao.addEventListener("click", function() {
    QuatroOuDois = 1;
});

function calcFaltas(){
    const input_Falta = document.getElementById('input_Falta').value;

    if(!input_Falta){
        alert("Insira um valor válido!");
        return 0;   
    }else if(QuatroOuDois == 2) {
        alert("Escolha uma das opções!")
        return 0;
    }

    console.log(input_Falta)

    telaInicial.style.display = 'none';
    podeFaltarTela.style.display = 'flex';

    totalFaltas = input_Falta * valores[QuatroOuDois];
    diasRestantes = maxFaltas[QuatroOuDois] - input_Falta;

    if(totalFaltas < maxFaltas[QuatroOuDois]){
        podeFaltar_img.style.display = 'block';
        quants_Dias_Restantes.innerHTML = "Você pode faltar mais " + diasRestantes + " dias";
    }else {
        nPodeFaltar_img.style.display = 'block';
    }

    total_Aulas.innerHTML = "Total de Aulas: " + nTotalAulas[QuatroOuDois] + " aulas";
    total_Faltas.innerHTML = "Você faltou " + totalFaltas + " aulas";
    freq_Min.innerHTML = "A frequência mínima é de " + freqMinAulas[QuatroOuDois] + " aulas";
    max_Faltas.innerHTML = "O máximo que você pode faltar é " + maxFaltas[QuatroOuDois] + " aulas";
}

return_button.addEventListener("click", function() {
    QuatroOuDois = 2;
    
    telaInicial.style.display = 'flex';
    podeFaltarTela.style.display = 'none';
    podeFaltar_img.style.display = 'none';
    nPodeFaltar_img.style.display = 'none';
    quants_Dias_Restantes.innerHTML = "";
})
