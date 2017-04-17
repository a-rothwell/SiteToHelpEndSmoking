chrome.storage.sync.get(['age', 'packPrice', 'smokesPerDay'], function(value) {
    console.log(value.age + " " + value.packPrice + " " + value.smokesPerDay);
});
