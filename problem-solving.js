
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

