var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

const adicionar = document.getElementById("adicionar");

adicionar.addEventListener ('click', function(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'white';
    }
    
});

const subtrair = document.getElementById("subtrair");

subtrair.addEventListener ('click', function(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
});

const reset = document.getElementById("reset");

reset.addEventListener ('click', function(){
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'white';
    }
});
