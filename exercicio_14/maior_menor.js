/* Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
contrário escrever NÃO É MAIOR QUE 10! */

let valor;

valor=parseFloat(prompt("Escreva um numero"));

if (valor > 10){
    alert(`É MAIOR QUE 10!`)
}
else{
    alert(`NÃO É MAIOR QUE 10!`)
}