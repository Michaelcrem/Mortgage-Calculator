# Mortgage-Loan-Calculator
A networked application that uses Express.js as a framework to run on port 3000 (mortageCal.js) application uses Pug template engine to provide layout/structure.   


The UI Prototype design I built in Adobe XD and After Effects: https://mcremoni.myportfolio.com/mortgage-calculator

Full stack project network application: https://sliding-mortgage-calculator.herokuapp.com/

## Obtaining and Calculating user input values 

I wanted to incoporate range sliders which are both used to calculate the total loan amount of the listing price. A drop down menu to obtain a 15 year or 30 year fixed mortgage loan for calculated monthly payments.     

* The first range slider is used to obtain the user input for the total home price. The range of the home price slider starts from 0 and ends at 10 million. The user can conveniently scroll the slider to the right for a greater number and left for a smaller number and the total home list price variable will be constantly reasigned to a new value depending on the scrolling from the user.   

* The second range slider obtains the user input of the downpayment. Same as the first range slider, sliding it to the right will obtain a greater number and left for a smaller number. From there, both of the element values from sliders are used together to get the value of the loan amount where the input of the second range slider (downpayment input) is subtracted from the first range slider (total home price). The downpayment variable along with the percent of the down payment calculated from the listing price will constantly be reasigned to new values depending on the scrolling from the user. 

* Once the loan price is obtained, the value is used in a mathmatical algorithm to calculate the monthly mortage payments. Data used concurrently with the loan amount to calculate the monthly mortage payment consist of: 
    * 5 percent interest rate 
    * 15 or 30 year loan options 
    * the average U.S. mill rate (.008) (used to calculate property tax) 
    * home insuarnace ($22 / monthley rough estimitate) 

Depending on how the user scrolls each range slider and their options of mortage loan types, the value from the expression (total mortgage payments) will get reasigned to a new value. 

## Styling and Data Visualization

The styling of my project derived from a past project I had completed for the '100 Days of Design' challenges where for day 19, I had to design a mockup for a calculator application and so I created a home mortgage loan calculator design in Adobe XD and the scrolling animation in After Effects: https://mcremoni.myportfolio.com/mortgage-calculator 

* Pug template engine used concurrently with the Express framework in order to provide the visual layout / structure of the application. CSS used for stylizing the frontend of the apploication and all fonts (Muli), colors #39D6F7,  #7071B4, and static assets such as scrolling buttons, and drop down buttons created from my original 100 days of design project.

* Chart.js library used to provide a visual represenation of how the mortage payments is divided into, principle/interest, property tax, and home insurance  paid in each month. 
   * Each variable value, (interest payment, property tax, and home insurance) are assigned to a key/value pair in my chart object to break down visually the total payments in a mortgage.  
   * Colors such as #566D79, #94BCD1, #D3DEE3 are used to correlate with the chart object key/value pairs in order to distinguish the the value of the interest payment, property tax, and home insurance variables.    

  
