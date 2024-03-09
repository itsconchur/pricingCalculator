// console.log("Pricing");

// inputs / DOM Elements

// console.log(form, averageServicePrice, additionalMonthlySales, monthlyIncrease, yearlyIncrease, myCut);  

const averageServicePrice = document.getElementById("averageServicePrice");
const additionalMonthlySales = document.getElementById("additionalMonthlySales");
const monthlyIncrease = document.getElementById("monthlyIncrease");
const yearlyIncrease = document.getElementById("yearlyIncrease");
const myCut = document.getElementById("myCut");

const form = document.getElementById("priceBased");

let amount = 10000;
console.log(new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(amount));

additionalMonthlySales.addEventListener("keyup", ()=>{
    monthlyIncrease.value = averageServicePrice.value * additionalMonthlySales.value;
    yearlyIncrease.value = monthlyIncrease.value * 12;
    myCut.value = yearlyIncrease.value * 0.1;   

    let monthlyIncreaseValue = monthlyIncrease.value;
    let yearlyIncreaseValue = yearlyIncrease.value;
    let myCutValue = myCut.value;
    return monthlyIncreaseValue;
    return yearlyIncreaseValue; 
    return myCutValue;

   


})