window.addEventListener('load', pageLoad);

let toTopButton;

// page load to give time for html to load before jscript
function pageLoad() {
    const api_url = "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json";
    let priceRequest = new XMLHttpRequest();
    priceRequest.addEventListener("load", showPrice);
    priceRequest.open("GET", api_url);
    priceRequest.send();

    //submitting info to email via zapier

    let submit = document.getElementById("submit");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    alert = document.getElementById("alert");

    //Return to top code
    toTopButton = document.getElementById("jumptotop");
    toTopButton.addEventListener("click", goToTop);

    //submit form
    submit.addEventListener("click", submitForm);

    //appear go to top button on scroll
    window.addEventListener('scroll', appear);


    //action menu items
    //let home = document.getElementById("menu-home");

    //home.addEventListener("click",actionMenu);
}

function showPrice(e) {
    e.preventDefault();
    let myarray = JSON.parse(e.target.response);
    document.getElementById('cp').innerHTML = "$" + JSON.parse(e.target.response)[0].Last;

}


/*action click
function actionMenu(){
    console.log("click");
    href = "//www.google.com";
}
*/
function submitForm(e) {
    e.preventDefault();
    if(validate()) {
        sendEmail();
    } else {
        showError();
    }
}

function validate() {
    if (name.value == "" || email.value == "" || message.value == "") {
        return false;
    } else {
        return true;
    }
}

function showError() {
    let alert = document.getElementById("alert");
    alert.innerHTML = "Please complete all fields to submit form.";
}

function sendEmail() {
    let emailUrl = "https://hooks.zapier.com/hooks/catch/5963107/o9gm325";
    let emailObj = {
        name: name,
        email: email,
        messsage: message,
        to: "harismubashir@gmail.com"

    }

    let emailRequest = new XMLHttpRequest();
    emailRequest.open("POST", emailUrl);
    emailRequest.send(JSON.stringify(emailObj));

    let alert = document.getElementById("alert");
    alert.innerHTML = "Sent"
    name.value= "";
    email.value="";
    message.value="";
}




function goToTop() {
    window.scrollTo(0, 0);
}

function appear(e){
    if (window.scrollY > 400) {
        toTopButton.style.display = "block";
    }else{
        toTopButton.style.display = "none";
    } 
}