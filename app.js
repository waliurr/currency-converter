window.addEventListener('load', calAmount);

function $(selector){
    return document.querySelector(selector);
}

let exchange = {
    USD: 84.83,
    EUR: 100.78,
    INR: 1.16
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