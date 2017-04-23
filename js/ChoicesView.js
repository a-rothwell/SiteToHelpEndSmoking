var snd = new Audio("../media/bensound-goinghigher.mp3"); // buffers automatically when created
snd.play();
chrome.storage.sync.get(['dollarsPerYear', 'minutesPerYear'], function(value) {
    document.getElementById("money-spent-content").innerHTML = "Learn about better ways to spend the " + Math.ceil(value.dollarsPerYear) + " more dollars you will have if you quit smoking";
    document.getElementById("time-spent-content").innerHTML = "Learn about better ways to spend the  " + Math.ceil((value.minutesPerYear / 60) / 24) + " more days of life you will have if you quit smoking";
});
