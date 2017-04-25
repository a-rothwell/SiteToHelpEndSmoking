document.getElementById("lang").addEventListener("click", lang);
document.getElementById("fit").addEventListener("click", fit);

function lang() {
    chrome.storage.sync.set({
        'image': "img/world.jpeg",
        'link': "https://www.duolingo.com/"
    });
}

function fit() {
    chrome.storage.sync.set({
        'image': "img/fitness.jpg",
        'link': "http://www.muscleandfitness.com/workouts/workout-routines/complete-mf-beginners-training-guide-0",
    });
}
