chrome.storage.sync.get(['dollarsPerYear', 'minutesPerYear'], function(value) {
    document.getElementById("dollarsPerYear").innerHTML= "You spend " + Math.ceil(value.dollarsPerYear) + " dollars per year on smokes";
    document.getElementById("minutesPerYear").innerHTML = "You lose " + Math.ceil((value.minutesPerYear / 60)/24) + " days of life per year";
});
var snd = new Audio("../media/Ticking-clock-sound.mp3"); // buffers automatically when created
snd.play();
document.getElementById("next").addEventListener("click", myFunction);
function myFunction() {
    window.location.href = '../ChoicesView.html';

}
