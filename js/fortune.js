
 // Fortune messages
let fortunes = [
    "Believe in yourself.",
    "Today is a fresh start.",
    "Keep learning new things.",
    "Stay happy and positive.",
    "Never give up on your dreams.",
    "Small steps bring big changes.",
    "Be kind to everyone.",
    "Your future is full of possibilities.",
    "Work hard and stay focused.",
    "Good things take time."
];

// Select a random fortune
let randomIndex = Math.floor(Math.random() * fortunes.length);

// Display the selected fortune
document.getElementById("fortuneText").textContent = fortunes[randomIndex];

// Get the fortune box
let fortuneBox = document.getElementById("fortuneBox");

// Change font color
document.getElementById("fontColorButton").addEventListener("click", function() {
    fortuneBox.style.color = "blue";
});

// Change background color
document.getElementById("backgroundButton").addEventListener("click", function() {
    fortuneBox.style.backgroundColor = "lightyellow";
});

// Change border color
document.getElementById("borderButton").addEventListener("click", function() {
    fortuneBox.style.borderColor = "green";
});

// Change font size and font family
document.getElementById("fontStyleButton").addEventListener("click", function() {
    fortuneBox.style.fontSize = "22px";
    fortuneBox.style.fontFamily = "Georgia";
});
