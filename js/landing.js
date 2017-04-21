document.getElementById("next").addEventListener("click", myFunction);

function myFunction() {

    chrome.storage.sync.set({
        'age': document.getElementById("age").value,
        'packPrice': document.getElementById("packPrice").value,
        'smokesPerDay': document.getElementById("smokesPerDay").value,
        'minutesPerDay': document.getElementById("smokesPerDay").value * 7,
        'smokesPerYear': document.getElementById("smokesPerDay").value * 365,
        'minutesPerYear': document.getElementById("smokesPerDay").value * 365 * 7,
        'packsPerDay': document.getElementById("smokesPerDay").value / 20,
        'packsPerYear': (document.getElementById("smokesPerDay").value / 20) * 365,
        'dollarsPerYear': (document.getElementById("smokesPerDay").value / 20) * 365 * document.getElementById("packPrice").value
    });
    window.location.href = '../stats.html';
}
