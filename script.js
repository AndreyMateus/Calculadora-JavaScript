// Exercício Calculadora JavaScript

//função de subtrair
function subtrair(numA,numB){
     return  numA - numB
}
console.log(subtrair(4,2)); 

//função para somar
function somar(a, b,c){
    return a + b + c
}
console.log(somar(2,2));

//função para mutiplicar
function multiplicar(a,b){
    return a*b
}
console.log(multiplicar(2,4));

//função de divisão
function dividir(a,b){
    return a/b
}
console.log(dividir(4,2));

// função ao quadrado
function quadrado(num){
    return num*num
}
console.log(quadrado(8));

// função média de três números, usando funções anteriores
function media(numA,numB,numC){
 return somar(numA,numB,numC)/3 
}
console.log(media(2,2,12))

// função que calcula a porcentagem
function porce(a,b){ 
    return (multiplicar(a,b))/100 // ou (a*b)/100
}
console.log(porce(300,15));

// função gerador de porcentagem
function geraPorce(a,b){
    return  a*100/b
}
console.log(geraPorce(2,200)) //quanto é 2% de 200 

// função que retorno o tipo de dados com TYPEOF
function tipoDe(a){
    return typeof(a)
}
console.log(tipoDe(2) + '  <<< esse aqui é o tipo de dado');
  





