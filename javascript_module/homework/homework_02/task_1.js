let years = [2017,2018,2019,2020,2021];
let wage = 1000;
let percentage = 1.5 ;


for(let i = 0; i < years.length ; i++){
    console.log(`\nYear: ${years[i]}`);
    console.log(`Percentage: ${percentage}`);
    console.log(`Wage: ${( wage/100 * percentage) + wage}`);
    console.log(`On year ${years[i]  } , the employee's wage is ${( wage/100 * percentage) + wage}`)
    percentage = percentage * 2;
    
}