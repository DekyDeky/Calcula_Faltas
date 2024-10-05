// Telas
const telaInicial = document.getElementById('homeFalta');
const podeFaltarTela = document.getElementById('pode_Faltar_tela');

// Botões
const quatro_aulas_botao = document.getElementById('quatro-aulas_botao');
const duas_aulas_botao = document.getElementById('duas-aulas_botao');
const calc_botao = document.getElementById('calc_botao');
const return_button = document.getElementById('return_button');

// Imagens
const podeFaltar_img = document.getElementById('podeImg');
const nPodeFaltar_img = document.getElementById('nPodeImg');

// info Faltas
const total_Aulas = document.getElementById('total_Aulas'); //80 aulas (20 dias) / 40 aulas (20 dias)
const total_Faltas = document.getElementById('total_Faltas'); //Input (dias) * 4 ou 2 = x aulas
const freq_Min = document.getElementById('freq_Min'); //x aulas * 0.75
const max_Faltas = document.getElementById('max_Faltas'); // (80 ou 40 - freq_min) / 
const quants_Dias_Restantes = document.getElementById('quants_Dias_Restantes'); //20 - Input dias

const infos = [total_Aulas, total_Faltas, freq_Min, max_Faltas, quants_Dias_Restantes];

// Valores Fixos
const valores = [4, 2];

const nTotalAulas = [80, 40];
const nTotalAulasDias = 20;

const freqMinAulas = [60, 30];
const maxFaltas = [20, 10];

/*
const nTotalQuatroAulas = 80; //Nº Total de Quatro Aulas
const nTotalDuasAulas = 40; //Nº Total de Duas Aulas
const nTotalAulasDias = 20; //Nº Total de Aulas em Dias

const freqMinQuatroAulas =  60; //Nº Total de 
const freqMinDuasAulas = 30;
*/