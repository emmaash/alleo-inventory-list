window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.querySelector(".container");

    // Fade out loading screen
    loadingScreen.style.opacity = "0";

    // Remove loading screen after fade out
    setTimeout(() => {
        loadingScreen.style.display = "none";
        content.style.display = "block";
    }, 800);
});
