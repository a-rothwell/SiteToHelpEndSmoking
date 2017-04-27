document.getElementById("dog").addEventListener("click", dog);
document.getElementById("fam").addEventListener("click", fam);

function dog() {
    chrome.storage.sync.set({
        'image': "img/dog_image.jpg",
        'link': "https://secure.aspca.org/donate/founder"
    });
}

function fam() {
    chrome.storage.sync.set({
        'image': "img/grandparents.jpeg",
        'link': "http://finance.zacks.com/eight-types-saving-investment-options-1512.html"
    });
}
