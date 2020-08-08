function generateRandomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function changeBgColor() {
    var colorbg = document.getElementById('color-overlay');
    colorbg.style.backgroundColor = generateRandomColor();

}

function changeBgText() {
    let textBg = document.getElementById("text-bg");
    if (textBg.innerHTML == "ON THE FLOOR BABY")
        textBg.innerHTML = "HIT IT HARD BABY";
    else if (textBg.innerHTML == "HIT IT HARD BABY")
        textBg.innerHTML = "ROCK THE PARTY BABY";
    else if (textBg.innerHTML == "ROCK THE PARTY BABY")
        textBg.innerHTML = "ON THE FLOOR BABY";
}

function check() {
    generateRandomColor();
    changeBgColor();
    changeBgText();
}
setInterval(check,555);