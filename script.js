let btn = document.getElementById("btn");
let nbr = document.getElementById("clicks");

let clicks = 0;

function onClick() {
    clicks++;
    nbr.innerText = clicks
}

btn.addEventListener("click", onClick);