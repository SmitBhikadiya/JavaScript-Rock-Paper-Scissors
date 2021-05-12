var click_btn = document.getElementById("click_btn");

function ageInDays() {
    var birth_year = prompt("Enter your birth year : ");
    const cur_year = 2021;
    var ageInDay = (cur_year - birth_year) * 365;
    document.getElementById("result").innerHTML = '<h3 class="text-center bg-success text-light p-2 mt-2">You are ' + ageInDay + " days old.</h3>";
}

function resetMe() {
    document.getElementById("result").innerHTML = "";
}

function catGenerator() {
    var img = document.createElement("img");
    var div = document.getElementById("cat-results");
    img.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    img.alt = "cat";
    div.appendChild(img);
}

// challenge3
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    ids = ['rock', 'paper', 'scissor'];
    humanChoice = yourChoice.id;
    botChoice = ids[Math.floor(Math.random() * 3)];
    console.log(humanChoice, botChoice);
    results = desideWinner(humanChoice, botChoice);
    rpsFrontEnd(yourChoice.id, botChoice, results)
}

function rpsFrontEnd(yourChoice, botChoice, result) {

    // create winner lose state element
    var h2 = document.createElement('h2');
    var text = document.createTextNode("You " + result["state"]);
    h2.appendChild(text);
    h2.setAttribute("style", "color:" + result["color"] + ";")

    var yourimg = document.createElement('img');
    yourimg.src = "static/img/" + yourChoice + ".png";
    var botimg = document.createElement('img');
    botimg.src = "static/img/" + botChoice + ".png";

    var div = document.getElementById("rps-box");
    div.innerHTML = "";

    div.appendChild(yourimg);
    div.appendChild(h2);
    div.appendChild(botimg);
}

function desideWinner(humanChoice, botChoice) {
    if (humanChoice == botChoice) {
        return { "state": "Tie", "color": "blue" };
    }
    if (humanChoice == "paper" & botChoice != "rock" || humanChoice == "rock" & botChoice != "scissor" || humanChoice == "scissor" & botChoice != "paper") {
        return { "state": "Lost", "color": "red" };
    }
    return { "state": "Won", "color": "green" };
}