var maxProfit = function (prices) {
    //lowest before highest
    //compare low and high and save current best profit
    let buy = prices[0];
    let sell = prices[1];
    let profit = prices[1] - prices[0];



    for (let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i]);
        sell = prices[i];
        let tempProfit = sell - buy;
        profit = Math.max(tempProfit, profit);
    }

    if (prices.length < 2 || profit < 0) {
        return 0
    } else {
        return profit
    }
};

maxProfit([15, 1, 6, 7, 21, 6, 8, 3, 50]);