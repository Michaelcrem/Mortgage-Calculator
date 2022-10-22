# Mortgage-Loan-Calculator
The Prototype design I built in Adobe XD and After Effects: https://mcremoni.myportfolio.com/mortgage-calculator

Full stack project: https://sliding-mortgage-calculator.herokuapp.com/

## For obtaining user input values, I wanted to incoporate range sliders which are both used to calculate the total loan amount needed on the listing price. 

* The first range slider is used to obtain the user input for the total home price. The range of the home price slider starts from 0 and ends at 10 million. The user can scroll the slider to the right for a greater number and left for a smaller number. 

* The second range slider obtains the user input of the downpayment. Same as the first range slider, sliding it to the right will obtain a greater number and left for a smaller number. From there, both of the element values from both range sliders are used together to get the value of the loan where the input of the second range slider (downpayment input) is subtracted from the first range slider (total home price). 

* Once the loan price is obtained, the value is used in a mathmatical algorithm used to calculate the monthly mortage payments. Data used concurrently with the loan amount consist of: 
    * 5 percent interest rate 
    * the average U.S. mill rate (.008) (used to calculate property tax) 
    * home insuarnace ($22 / monthley rough estimitate) 

For NowThe average U.S. mill rate (.008) is used to calculate property tax but can expand to use . So far, this application uses a 5 % interest rate on the loan amount but can expand to allow user intput   
