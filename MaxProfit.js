function getMaxProfit(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const targetPrice = prices[j];
      const currentProfit = targetPrice - currentPrice;
      maxProfit = Math.max(maxProfit, currentProfit);
    }
  }
  return maxProfit;
}

const stockPricesYesterday = [10, 7, 5, 8, 11, 9, 1];
console.log(getMaxProfit(stockPricesYesterday));
