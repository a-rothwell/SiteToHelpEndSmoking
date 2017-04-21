chrome.storage.sync.get(['dollarsPerYear', 'minutesPerYear'], function(value) {
    document.getElementById("dollarsPerYear").innerHTML= "You spend " + value.dollarsPerYear + " dollars per year";
    document.getElementById("minutesPerYear").innerHTML = "You lose " + (value.minutesPerYear / 24) + " hours of life per year";
});
