let compArea = $("#compArea");
let win = $("#win");
let lost = $("#lost");
let img = $("img");
let userTotal = $("#userTotal");
let lostOrWin = $("#lostOrWin");

let comp,
    user = 0,
    wins = 0,
    losses = 0,
    low = "",
    blueNum = 0,
    greenNum = 0,
    redNum = 0,
    yellowNum = 0;

function random() {
    comp = Math.ceil(Math.random() * 120);
    blueNum = Math.ceil(Math.random() * 12);
    greenNum = Math.ceil(Math.random() * 12);
    redNum = Math.ceil(Math.random() * 12);
    yellowNum = Math.ceil(Math.random() * 12);
}
random();
compArea.html(comp);

function dom() {
    userTotal.html(user);
    compare();
}

function compare() {
    if (comp == user) {
        lostOrWin.html(`You win!`);
        wins++
        win.html(`Win: ${wins}`);
        reset();
    } else if (comp < user) {
        lostOrWin.html(`You lost!`);
        losses++
        lost.html(`Lost: ${losses}`);
        reset();
    }
}

function reset() {
    user = 0;
    userTotal.html(user);
    random();
    compArea.html(comp);
}

$(document).ready(function () {
    img.on("click", e => {
        userChoice = e.target.id;
        if (userChoice == "imgBlue") {
            user += blueNum;
        } else if (userChoice == "imgGreen") {
            user += greenNum;
        } else if (userChoice == "imgRed") {
            user += redNum;
        } else {
            user += yellowNum;
        }
        dom();
    })
})