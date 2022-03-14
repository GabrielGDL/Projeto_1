console.clear()
const prompt = require('prompt-sync')();

console.log('Você é um engenheiro em uma usina nuclear e em uma noite qualquer ela começou a se comportar de forma anormal. Depois de seus engenheiros subalternos verificarem a situação eles te relaram que ela está entrando em colapso, o que é altamente improvavel, cabe a você decidir se eles estão certos ou não e decidir o que fazer');
console.log();


let pontos = 0;
let resposta; 

if (resposta == 'sim'){
    pontos += 1
} else {}
 

let per1 = prompt('Você seguiu a orientação dos outros engenheiros da usina?');


if (per1 == 'sim') {
    pontos = pontos + 1;
    console.log(pontos);
    console.log('A usina está no caminho de se estabilizar, mas ainda está em perigo e são necesárias outras ações');
} else if (per1 == 'nao') {
    console.log ('Você colocou a usina em perigo, porém ainda há tempo de salva-la');
}


let per2 = prompt('Você verificou pressão interna do nucleo?');

if (per2 == 'sim') {
    pontos = pontos + 1;
    console.log(pontos);
    console.log('A usina está começando a se estabilizar, porém ainda á perigo');
} else if (per2 == 'nao') {
    console.log ('O núcleo pode estar começando há entrar em colapso,é necessário agir rápido!');
}

let per3 = prompt('Você liberou as valvulas de pressão internas?');
    
if (per3 == 'sim') {
    pontos = pontos + 1;
    console.log(pontos);
    console.log('Ótimo! o núcleo está quase estabilizado');
} else if (per3 == 'nao') {
    console.log('O perigo aumentou drasticamente! são necessárias ações imediatas');
}

let per4 = prompt('Você verificou a quantidade de radiação no ar?');

if (per4 == 'sim') {
    pontos = pontos + 1;
    console.log(pontos);
    console.log('Ótimo, isso indica que o núcleo não está danificado e radiação não está vazando');
} else if (per4 =='nao') {
    console.log('Sem esse procedimento, não há como saber se o local está seguro para que outras medidas sejam tomadas, e se o núcleo começou a vazar ou não, faça isso imediatamente');
}

let per5 = prompt('você ativou as barras de emergência do nucleo?');

if (per5 == 'sim') {
    pontos = pontos + 1;
    console.log(pontos);
    console.log('Isso garante que o núcleo não explodira, dando tempo para que mais ações sejam tomadas');
 } else if (per5 =='nao') {
        console.log('Se o núcleo explodir será uma catastrofe inimaginável, ative as barras imediatamente!');
    }

   if (pontos == 0) {
       console.log('Você falhou em todas as etapas necessárias e uma catastrofe inimaginavel ocorreu');
      }   else if (pontos == 1) {
          console.log('Apesar de inumeros erros cruciais, o pior foi evitado. Nos resto agora arrumarmos o estrago');
      }   else if (pontos == 2) {
          console.log('A situação foi péssima, mas os estragos não são irreparaveis')
      }   else if (pontos == 3) {
          console.log( 'Não foi uma resolução ideal, e os danos são consideraveis, mas a vida segue')
      }   else if (pontos == 4) {
          console.log('Parabéns! Apesar de um pequeno inconveniente tudo foi resolvido de forma muito profissional, os danos são minimos')
      }   else if (pontos == 5) {
          console.log('Você agiu da melhor forma possivel, e o que poderia ser uma catastrofe inimaginavel foi evitada com maestria, nenhum dano foi registrado e nenhuma perda significante ocorreu')
      }
