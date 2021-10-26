let years = [2018,2019,2020,2021];
let wage = 1000;
let percentage = 1.5 ;


for(let i = 1; i <= years.length ; i++){
    percentage = percentage * 2;
}

let totalWage =( wage/100 * percentage) + wage;
console.log(totalWage)