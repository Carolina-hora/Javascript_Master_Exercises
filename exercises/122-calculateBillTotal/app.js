 function calculateBillTotal(preTaxAndTipAmount) {
     // your code here
    let auxTip = preTaxAndTipAmount*0.15
     let auxSalesTax = preTaxAndTipAmount*0.095
     return preTaxAndTipAmount+auxTip+auxSalesTax
 }

// function calculateBillTotal(preTaxAndTipAmount) {
//     // your code here
    
//     return preTaxAndTipAmount*(1+0.15+0.095)
// }

let output = calculateBillTotal(20);
console.log(output); // --> 24.9