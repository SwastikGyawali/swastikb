// script.js

document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "love_story.html";
});

const noButton = document.getElementById("no");

// Function to make the "No" button move away when clicked
noButton.addEventListener("click", function() {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});
