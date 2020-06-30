window.addEventListener('load', pageLoad);
// page load to give time for html to load before jscript
function pageLoad() {
    const api_url = "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json";
    let priceRequest = new XMLHttpRequest();
    priceRequest.addEventListener("load", showPrice);
    priceRequest.open("GET", api_url);
    priceRequest.send();
}

function showPrice(e) {
    e.preventDefault();
    console.log("$" + JSON.parse(e.target.response)[0].Last);
    console.log(typeof e.target.response);
    let myarray = JSON.parse(e.target.response);
    document.getElementById('cp').innerHTML = "$" + JSON.parse(e.target.response)[0].Last;

}


//getPRICE();

//submitting info to email via zapier

let submit = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let alert = document.getElementById("alert");

submit.addEventListener("click", submitForm);

function submitForm(e) {
    e.preventDefault();
    /*
    if(validate(...)) {
        sendEmail(...);
    } else {
        showError(...)
    }

    Add code to cleanup forms and send update message of "sent"
    */
    validate(name.value, email.value, message.value);
}

function validate(name, email, message) {
    if (name == "" || email == "" || message == "") {
        alert.innerHTML = "Please complete all fields to submit form.";
    } else {

        emailUrl = "https://hooks.zapier.com/hooks/catch/5963107/o9gm325";
        let emailObj = {
            name: name,
            email: email,
            messsage: message,
            to: "harismubashir@gmail.com"
        };
        let emailRequest = new XMLHttpRequest();
        emailRequest.open("POST", emailUrl);
        emailRequest.send(JSON.stringify(emailObj));
    }
}

//Return to top code
let toTopButton = document.getElementById("jumptotop");
toTopButton.addEventListener("click", goToTop);

function goToTop() {
    window.scrollTo(0, 0);
}