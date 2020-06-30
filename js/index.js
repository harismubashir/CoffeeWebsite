
const api_url= "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json";

async function getPRICE()
{
    const response = await fetch(api_url);
    const price = await response.json();
    console.log(price[0]);
    document.getElementById('cp').textContent = price;

}

getPRICE();
