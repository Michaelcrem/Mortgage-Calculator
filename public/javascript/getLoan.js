var dropdown_content = document.getElementById("dropdown-content");
var loan = document.getElementById("Loan");

var options = document.getElementsByClassName("options");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var slider1 = document.getElementById("myRange2");
var output1 = document.getElementById("demo2");
output1.innerHTML = slider1.value;

var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
var taxes = document.getElementById("taxes");

var totalPerMonth = document.getElementById("totalMonth")



for(option of options) {
    option.onclick = function() {
        loan.innerHTML = this.textContent;
        let regex = /[0-9]/g;
        let loanYear = loan.innerHTML;
        let months = Number(loanYear.match(regex).join('')) * 12;
        let annualInterestRate = Number(5) / 100;
        let monthlyInterestRate = annualInterestRate / 12;
        let loanAmount = Number(Number(output.innerHTML.match(regex).join('')) 
        - Number(output1.innerHTML.match(regex).join('')));

    output4.innerHTML = commas((Number(loanAmount) * (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))))).toFixed(0));

    totalPerMonth.innerHTML = commas((Number(loanAmount) * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))))).toFixed(0));

    
    }
    
    
}





