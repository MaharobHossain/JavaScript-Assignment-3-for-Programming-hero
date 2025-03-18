
//     Problem-01: Help The Zoo Manager

function calculateMoney(ticketSale) {
    if( ticketSale < 0 ){
        return "Baker mama ajke mara khaico, sudhu loss e loss :("
    }

    let ticketPrice = 120;
    let securityDailyCost = 500;
    let staffDailyLunchCost = 8 * 50;

    let dailyTotalWest = securityDailyCost + staffDailyLunchCost;
    let dailyTotalIncome = ticketSale * ticketPrice;

    let dailyTotalProfit = dailyTotalIncome - dailyTotalWest;
    return dailyTotalProfit;

}

let todayTicketSale = calculateMoney(10);
// let todayTicketSale = calculateMoney(-15);
// let todayTicketSale = calculateMoney(1055);
console.log("Today Baker Mama Profit:", todayTicketSale);









//  Problem-02: Good Name , Bad Name

function checkName(name) {

    if( typeof name !== "string"){
        return "invalid";
    }
    let lastCharecter = name[name.length - 1].toLowerCase();
    let goodCharecters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    let findGoodCharector = goodCharecters.includes(lastCharecter) ? "Good Name" : "Bad Name" ;
    return findGoodCharector;
}

// let findNameResult = checkName("Salman");
// let findNameResult = checkName("RAFEE");
// let findNameResult = checkName("Jhankar");
//let findNameResult = checkName(98765);
let findNameResult = checkName(["Rashed"]);
console.log(findNameResult);






//    Problem 03 : Virus in my Array


function deleteInvalids(arr) {
    if(!Array.isArray(arr)){
        return "Invalid Array";
    }
    
    let findArrayNumber = arr.filter(item => typeof item === "number" && !isNaN(item));
    return findArrayNumber;
 }

   let arrayNumber = deleteInvalids([3, 8, 36, 37, NaN, undefined, true, false, 73, 99]);
   //let arrayNumber = deleteInvalids({ num: [1, 2, 3] });
   //let arrayNumber = deleteInvalids(["1", { num: 2 }, NaN]);
   //let arrayNumber = deleteInvalids([1, 2, -3]);
   console.log("The Array Number is:", arrayNumber);









   //  Problem 04 : Make A Great Password

   function password(obj) {

    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    let formattedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

    return `${formattedSiteName}#${obj.name}@${obj.birthYear}`;
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); 
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })); 
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 })); 
console.log(password({ birthYear: 2002, siteName: "Facebook" })); 







//     Problem 05 : Monthly Savings of a Freelancer

function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;
    for (let amount of arr) {
        if (amount >= 3000) {
            totalIncome += amount * 0.8; 
        } else {
            totalIncome += amount;
        }
    }

    let savings = totalIncome - livingCost;

    return savings >= 0 ? savings : "earn more";
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400])); 
console.log(monthlySavings([5000, 2000, 3500], 7000)); 
