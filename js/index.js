
const api_url= "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json";
let priceRequest = new XMLHttpRequest();
priceRequest.addEventListener("load",getPrice);
priceRequest.open("GET",api_url);
priceRequest.send();
function getPrice(e)
{
    e.preventDefault();
    todaysPrice(e);



}

function todaysPrice(e){
  
  console.log("$"+JSON.parse(e.target.response)[0].Last);
  document.getElementById('cp').innerHTML = "$" +JSON.parse(e.target.response)[0].Last;

}

//getPRICE();



let toTopButton = document.getElementById("jumptotop");
toTopButton.addEventListener("click", goToTop);

function goToTop(){
    window.scrollTo(0,0);
}