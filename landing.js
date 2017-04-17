document.getElementById("next").addEventListener("click", myFunction);

function myFunction() {

    chrome.storage.sync.set({
        'age': document.getElementById("age").value,
        'packPrice': document.getElementById("packPrice").value,
        'smokesPerDay': document.getElementById("smokesPerDay").value
    });
    window.location.href = 'stats.html';
}
