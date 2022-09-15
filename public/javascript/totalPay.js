var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var slider1 = document.getElementById("myRange2");
var output1 = document.getElementById("demo2");
output1.innerHTML = slider1.value;

var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
var output5 = document.getElementById("Loan");
var taxes = document.getElementById("taxes");
var totalPerMonth = document.getElementById("totalMonth")

function commas (num)  {
    let numStr = num.toString().split('').reverse();
    let count = 0;

    let commas = numStr.map((ele, idx) =>  {
        count++
        if(count === 3) { 
        count = 0;
        return ',' + ele;
        } 
        return ele;   
    }).reverse().join('')

    return commas.startsWith(',') ? commas.slice(1) : commas
}


slider.oninput = function() {
    let regex = /[0-9]/g;
     
   
  output.innerHTML = commas(this.value);
  output3.innerHTML = (Number(output1.innerHTML.match(regex).join('')) / Number(output.innerHTML.match(regex).join('')) * 100).toFixed(1);
  //output3.innerHTML = Math.round(Number(output3.innerHTML).toFixed(2) * 100);
  taxes.innerHTML = commas(Math.round(.008 * Number(output.innerHTML.match(regex).join('')) / 12));
  let loanYear = output5.innerHTML;
  let loanAmount = Number(Number(output.innerHTML.match(regex).join('')) - Number(output1.innerHTML.match(regex).join('')));
  
  
  let annualInterestRate = 5 / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(loanYear.match(regex).join('')) * 12;

  output4.innerHTML = commas((Number(loanAmount) * (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))))).toFixed(0));

                  totalPerMonth.innerHTML = commas(Number(output4.innerHTML.match(regex).join('')) + 
                  Number(document.getElementById("taxes").innerHTML.match(regex).join('')) + Number(document.getElementById("insurance").innerHTML));
}



slider1.oninput = function() {
let regex = /[0-9]/g;

  output1.innerHTML = commas(this.value);
  output3.innerHTML = (Number(output1.innerHTML.match(regex).join('')) / Number(output.innerHTML.match(regex).join('')) * 100).toFixed(1); 
  let loanYear = output5.innerHTML;
  let loanAmount = Number(Number(output.innerHTML.match(regex).join('')) - Number(output1.innerHTML.match(regex).join('')));
  
  
  let annualInterestRate = Number(5) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(loanYear.match(regex).join('')) * 12;


  output4.innerHTML = commas((Number(loanAmount) * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))))).toFixed(0));

    totalPerMonth.innerHTML = commas(Number(output4.innerHTML.match(regex).join('')) + 
    Number(document.getElementById("taxes").innerHTML.match(regex).join('')) + Number(document.getElementById("insurance").innerHTML));
}





 







