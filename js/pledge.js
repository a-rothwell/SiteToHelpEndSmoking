document.getElementById("next").addEventListener("click", game);
document.getElementById("submit").addEventListener("click", submit);

function game() {
    window.location.href = '../game.html';
}

function submit() {
    document.getElementById("reasons quit").innerHTML += document.getElementById("reason").value;
    disable();
}

function disable(){
  document.getElementById('submit').setAttribute("disabled", "disabled");
}
