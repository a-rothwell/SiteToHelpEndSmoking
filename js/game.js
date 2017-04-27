document.getElementById("submit").addEventListener("click", update);
document.getElementById("link").addEventListener("click", link);
document.getElementById("percent").value = 500;
chrome.storage.sync.get(['image', 'smokesPerDay'], function(value) {
    document.body.style.backgroundImage = "url(" + value.image + ")";
});
var created = false;
var x = document.getElementById('link');
x.style.display = 'none';

function update() {
    chrome.storage.sync.get(['smokesPerDay', 'image', 'link'], function(value) {
        var cigs = parseInt((1+value.smokesPerDay) - document.getElementById("dailyCigs").value);
        var currentPercent = parseInt((document.getElementById("percent").value));
        var totalCigs = parseInt(currentPercent) - parseInt(cigs);
        document.getElementById("percent").value = parseInt(totalCigs);

        if (document.getElementById("percent").value <= 0 & created == false) {
            var x = document.getElementById('link');
            if (x.style.display === 'none') {
                x.style.display = 'block';
            }
        }
    });
};

function link() {
    chrome.storage.sync.get(['smokesPerDay', 'image', 'link'], function(value) {
        window.location.href = value.link;
    });
}
