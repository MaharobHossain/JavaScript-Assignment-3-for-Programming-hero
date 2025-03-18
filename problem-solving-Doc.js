
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




function checkName(name) {

    if( typeof name !== "string"){
        return "invalid";
    }
    let lastCharecter = name[name.length - 1].toLowerCase();
    let goodCharecters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    let findGoodCharector = goodCharecters.includes(lastCharecter) ? "Good Name" : "Bad Name" ;
    return findGoodCharector;
}




function deleteInvalids(arr) {
    if(!Array.isArray(arr)){
        return "Invalid Array";
    }
    
    let findArrayNumber = arr.filter(item => typeof item === "number" && !isNaN(item));
    return findArrayNumber;
 }




   function password(obj) {

    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    let formattedSiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

    return `${formattedSiteName}#${obj.name}@${obj.birthYear}`;
}




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
