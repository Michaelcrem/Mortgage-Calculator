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


// MAIN

const CHART = document.getElementById("myChart");
// let getTaxes = document.getElementById("demo4")
let myChart = new Chart(CHART, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [ 1, 0, 0],
            backgroundColor: [
                'rgba(86, 109, 121, 1)',
                'rgba(148, 188, 209, 1)',
                'rgba(211, 222, 227, 1)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                
            ],
            borderWidth: 0,
            cutout: '80%'
        }]
    }, 
})


 document.getElementById("myRange").addEventListener("input", e => {
    percentage(document.getElementById("myRange").value, document.getElementById("myRange2").value);  
});

document.getElementById("myRange2").addEventListener("input", e => {
    percentage(document.getElementById("myRange").value, document.getElementById("myRange2").value);  
});

document.getElementById("Loan").addEventListener("dropdown", e => {
    console.log(document.getElementById("Loan"));
})



function percentage(something, something1) {
    let regex = /[0-9\-]/g;
    let loanYear = document.getElementById("Loan").innerHTML;
    let loanAmount = something - something1;
    let annualInterestRate = Number(5) / 100;
    let monthlyInterestRate = annualInterestRate / 12;
    let months = Number(loanYear.match(regex).join('')) * 12;
    
    
     let interestPrince = (Number(loanAmount) * (monthlyInterestRate /
   (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))))).toFixed(0);

   let taxes = Math.round(.008 * Number(something) / 12)
   //console.log(interestPrince);
   const {data} = myChart;
    data.datasets[0].data[0] = interestPrince;
    data.datasets[0].data[1] = taxes;
    data.datasets[0].data[2] = Number(document.getElementById('insurance').innerHTML);
    myChart.update();
    for(option of options) {
        option.onclick = function() {
            loan.innerHTML = this.textContent;
            loanYear = loan.innerHTML;
            months = Number(loanYear.match(regex).join('')) * 12;
            
            
            
    
        let interestPrince = (Number(loanAmount) * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))))).toFixed(0);
            //console.log(interestPrince);
            
    const {data} = myChart;
    data.datasets[0].data[0] = interestPrince;
    myChart.update();
    output4.innerHTML = commas(interestPrince);
    totalPerMonth.innerHTML = commas(Number(output4.innerHTML.match(regex).join('')) + 
    Number(document.getElementById("taxes").innerHTML.match(regex).join('')) + Number(document.getElementById("insurance").innerHTML));
        }
        
        
     }

  
 }
//  let loanYear = document.getElementById("Loan").innerHTML;
//  console.log(loanYear);
 