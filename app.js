window.addEventListener('load', calAmount);

function $(selector){
    return document.querySelector(selector);
}

let exchange = {
    USD: 85.79,
    EUR: 98.24,
    INR: 1.15
};

let btnSubmit = $('#submit');
btnSubmit.addEventListener('click', calAmount);

let amount = $('#amount');
amount.addEventListener('change', calAmount);

let base = $('#base');
base.addEventListener('change', calAmount);

function calAmount(){
    let base = $('#base').value;
    let amount = $('#amount').value;
    let bdt = 0.0;
    
    bdt = (exchange[base] * amount).toFixed(2);

    let textDisplay = $('.currency__display');
    textDisplay.innerHTML = amount + " " + base + " = " + bdt + " BDT" ;
}