//pegar elemento por i
//forma de sainda innerHTML retorna html

document.getElementById("texto").innerHTML="Meu primeiro texto <b> JS </b>!";




//vamos criar variaveis
let a,b,c;
a=5.3;
b=6.9;
c=7;
let pessoa="Ryan";
document.getElementById("texto2").innerHTML=pessoa +" tem "+(a+b)+ " anos. ";
//se colocar a e b entre () ele vai acreditar que é int


//criar função declaração em bloco
function minhaFuncao1() {
    document.write("A + B = " + (a + b) + "<br>");
    document.write("A + C = " + (a + c) + "<br>");
    document.write("B + C = " + (b + c) + "<br>");
}


// Criar função declaração em bloco
function minhaFuncao() {
    const resultado = `
        A + B = ${a + b}<br>
        A + C = ${a + c}<br>
        B + C = ${b + c}<br>
    `;
    document.getElementById("resultado").innerHTML = resultado;
}

//sempre usar const ou let var causa erro pois podemos redeclarar
//let podemos mudar o valor de dentro e const não
minhaFuncao();

//criamos um bloco assim
{

}

//Operadores +, - * / , **= potencia, ++ --, %,++, --=incrementa ou decrementa em 1
//+=, -=, **=, *=......
//e=&&, ou= ||, not=!, ??=retorna o diferente de null entre duas variaveis
//? :, condicional, retorna yes ou no
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
//true e false, null


function soma(valor1, valor2){
    return valor1+valor2;
}
let um=3;
let dois=4;


document.getElementById("texto3").innerHTML=soma(um,dois);

//criar objetos
// Cria um objeto carro
// Define a função multiplicar
function multiplicar(valor) {
    return valor * 2;
}

// Cria o objeto carro
const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-1234",
    multiplicar_ano: function() {
        return multiplicar(this.ano);
    },
    buzina: function() {
        alert('Biiiiiii');
    }
};

// Atualiza o conteúdo do elemento com id "texto4"
document.getElementById("texto4").innerHTML =
    "Marca: " + carro.marca + "<br>" +
    "Modelo: " + carro.modelo + "<br>" +
    "Ano: " + carro.ano + "<br>" +
    "Placa: " + carro.placa + "<br>" +
    "Ano multiplicado: " + carro.multiplicar_ano();




//EVENTOS
function eventoClick(){
    //vai mudar a cor para yellow
 document.body.style.background = "yellow"
}

function dblClick(){
    //evento de clique duplo
document.body.style.background = "yellow"
}

//relacionado ao mouse

//dispara quando mouse está sobre
//Tipoonmouseover
//para de disparar depois de sair mas permanece o coisa
function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
//mouse fora do elemento
//Tipoonmouseout
function voltaazul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

//mouse movido no elemento
//Tipoonmousemove
//ontinua disparando mesmo depois de sair
//function viraRosa(){
    //let div = document.getElementById("teste");
    //div.style.backgroundColor = "pink";

//enquanto eu me mover dentro da div vai continuar aparecendo o texto
function add_texto(){
    let p = document.getElementById("teste");
    //usar append para adicionar
    p.append('o mouse moveu');
}

//quando apertar no botão
//Tipoonmousedown
//ja onmousedown so aciona depois que eu soltar o clique
function clicouNaTela(){
    alert("voce clicou na tela")
}


//onfocus
//se eu clicar, sair e clicar de novo ele apaga tudo dentro
function limpa_texto_e_muda_cor(){
    let p = document.getElementById("observacao");
    p.value = ""; // Limpa o texto do campo de entrada
    p.style.backgroundColor = "pink"; // Muda a cor de fundo
}

//onchange dispara quando há uma mudança
//onblur dispara quando o elemento perde o foco
//onkeydown dispara quando a tecla é pressionada
//onkeypress dispara quando a tecla é solta
//onkeyup dispara quando a tecla é solta dobre um elemento
//onload dispara quando a pagina terminou de ser carregada
//onresize dispara quando a um redimencionamento de tela



//array:
const lista = ["pais","arroz", "pais", "feijao"];
//mostra o primeiro
//alert(lista[0]);
//colocar item no final
lista.push("seila")
lista.push("Brasileiro")
//adiciona no primeiro elemento
lista.unshift("Bonitão")
//retirar o ultimo elemento
lista.pop()
//remover primeiro item
lista.shift();
//
lista.splice(1, 0, "item1", "item2")//posi 1, quantidade de elementos removidos 3, substituicao
//let lista = ["a", "b", "c", "d"];
//lista.splice(1, 0, "item1", "item2");
//["a", "item1", "item2", "b", "c", "d"]
//lista.splice(1, 2, "item1", "item2");
//["a", "item1", "item2", "d"]

//mostra o ultimo
//alert(lista[lista.length-1])


//mesclar concatenar lista (primeiro crie outra lista)
const lista2 = ["pais","arroz", "pais", "feijao"];
const lista3 = ["salgadinho"];
const mesclarLista = lista.concat(lista2, lista3)

document.getElementById("teste").innerHTML = mesclarLista


//substring de matriz, cortar uma parte
//                    0          1          2        3
const jogadores = ["ribamar", "bito bito","pele", "maradona"]
const craques = jogadores.slice(2) //começa pela posição 2 at´o final
//vai da posi 0 até 2 não inclusivo
const lixos = jogadores.slice(0,2)
document.getElementById("teste2").innerHTML="Tem os lixos "+lixos+" e tem os craques "+craques;

//deixer em ordem use sort ou reverse somente em ordem alfabetica
jogadores.sort()
jogadores.reverse()

//para ordenar em numeros
let numeros=[100,34,21,4,2,0];
//tem que criar uma copia do array usando numeros.slice()
let ordemCrescente = numeros.slice().sort(function(a, b) {
    return a - b;
});

// Cria uma cópia do array e ordena em ordem decrescente
let ordemDecrescente = numeros.slice().sort(function(a, b) {
    return b - a;
});

//pegar o maior numero
function MaiorNumero(array){
    return Math.max.apply(null, array);
}
//pegar o menor numero
function MenorNumero(array){
    return Math.min.apply(null, array);
}

//mostrar numero especificos usando filte
let numMAIORQUE20= numeros.filter(filtragem);
function filtragem(value, index, array){
    return value >20;
}

document.getElementById("teste3").innerHTML=ordemCrescente+" e "+ordemDecrescente + "<br>"+ "O menor emaior numero são"+ MaiorNumero(numeros) + " e "+ MenorNumero(numeros) + "<br> e numeros maior que 20 "+ numMAIORQUE20;


//usar horarios
let hora= new Date().getHours();


//usar if e else
function verificarSeLampadaEstaLigadaOuDesligada(){
let conteudo=document.getElementById("observacao").value;
if (conteudo=="ligada"){alert("Lmapada está ligada")}
else{alert("Lmapada está desligada")}
}


//Usar switch
let cor = document.getElementById("cor").innerHTML;
switch (cor) {
    case "azul":
        document.body.style.backgroundColor = "blue";
        break;

    case "rosa":
        document.body.style.backgroundColor = "pink";
        break;

    case "branco":
        document.body.style.backgroundColor = "white";
        break;

    case "preto":
        document.body.style.backgroundColor = "black";
        break;

    default:
        document.body.style.backgroundColor = "gray"; // Cor padrão
}


const nomesCores=["cor", "cor2", "cor3", "cor4",  "cor5"]
//laço de repetição for

function mudaCor(cor) {
    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "rosa":
            document.body.style.backgroundColor = "pink";
            break;
        case "branco":
            document.body.style.backgroundColor = "white";
            break;
        case "preto":
            document.body.style.backgroundColor = "black";
            break;
        default:
            document.body.style.backgroundColor = "gray"; // Cor padrão
    }
}

function executarLoopComDelay() {
    for (let i = 0; i < nomesCores.length; i++) {
        setTimeout(function() {
            let cor = document.getElementById(nomesCores[i]).innerHTML;
            mudaCor(cor);
        }, i * 1000); // Atraso de 1 segundo entre cada iteração
    }
}
executarLoopComDelay();




//eventos de tempo com javascript
//setTimeout(function, tempoEmMilissegundos){} encerra depois dos segundos decididos
//setInterval(function, tempoEmMilissegundos){é permanente}
function ativarContagem() {
    document.getElementById("tempo").innerHTML = "COMEÇOU A CONTAR";
    contador = 0;
    //usando set setInterval não preciasamos de for
    intervalo = setInterval(function() {
        contador++;
        document.getElementById("tempo").innerHTML = contador;
    }, 1000); // Atualiza a cada segundo
}

//para parar o setTimeout
function pararContagem() {
    document.getElementById("tempo").innerHTML = "Terminou de  contar"
    clearInterval(intervalo);
}

/*
let contador = 0;
let intervalo;

function ativarContagem() {
    document.getElementById("tempo").innerHTML = "COMEÇOU A CONTAR";
    contador = 0;
    // Usando setInterval para atualizar a cada segundo
    intervalo = setInterval(function() {
        contador++;
        document.getElementById("tempo").innerHTML = contador;
    }, 1000); // Atualiza a cada segundo
}

function pararContagem() {
    clearInterval(intervalo);
    document.getElementById("tempo").innerHTML = "Terminou de contar";
}
    */























//classes
class carros{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
//metodo dentro
    buzinaDoCarro(){
        alert("biiiiiiiii");
    }

}
const uno = new carros("Fiat", "Uno", 2001);
console.log(uno)//retorna objeto
console.log(uno.ano)//retorna ano
console.log(uno.buzinaDoCarro())//chamar um metodo





//manipulação de dados
//data retorna o tempo atual
let data= new Date();
//retorna ano
let ano=data.getFullYear();
//retorna mes em numero de 0 a 11
let mes=data.getMonth();
//retorna dia
let dia = data.getDate();




//JSON - converter um texto em objeto e vice e versa
//JSON.parse() -> converte texto para objeto
//JSON stringify() -> converte objeto em texto
const carros2 = {
    marca2: "fiat",
    ano2: 2019
}
//Se não usar stringify ele retorna "object"
let texto=JSON.stringify(carros2);
//para pegar uma posicao temos que converter novamente em objeto
let objecto=JSON.parse(carros2);





//acessar outro site de forma remota
// Acessar outro site de forma remota
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/85802000/json/');
ajax.send();

ajax.onload = function() {
    document.getElementById('texto').innerHTML = ajax.responseText;
   

};