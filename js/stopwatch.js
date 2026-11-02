
// Get the timer display
let timerDisplay = document.getElementById("timer");

// Starting time
let seconds = 0;

// Store the timer
let timerInterval = null;

// Start button
document.getElementById("startButton").addEventListener("click", function() {

    // Prevent multiple timers from running
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function() {

        // Increase time by 3 seconds
        seconds = seconds + 3;

        // Display the time
        timerDisplay.textContent = seconds;

        // Stop automatically at 30 seconds
        if (seconds >= 30) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

    }, 3000);

});

// Stop button
document.getElementById("stopButton").addEventListener("click", function() {

    clearInterval(timerInterval);
    timerInterval = null;

});

// Reset button
document.getElementById("resetButton").addEventListener("click", function() {

    clearInterval(timerInterval);

    timerInterval = null;
    seconds = 0;

    timerDisplay.textContent = seconds;

});
