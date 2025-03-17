
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
