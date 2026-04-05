let fontSize = 16;

function changeText() {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerHTML = text;
}

function changeColor() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

function togglePara() {
    let para = document.getElementById("para");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

function resetPage() {
    document.getElementById("heading").innerHTML = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#e6e6e6";
    document.getElementById("para").style.display = "block";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("inputText").value = "";
    fontSize = 16;
}