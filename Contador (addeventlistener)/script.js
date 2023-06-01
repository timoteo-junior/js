var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementsByName("adicionar");

const adicionar = document.getElementById("adicionar");

adicionar.addEventListener ('click', function(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
});

const subtrair = document.getElementById("subtrair");

subtrair.addEventListener ('click', function(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
});