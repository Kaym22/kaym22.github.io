document.querySelector('#eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var userInput = document.querySelector('#userInput').value.toLowerCase().trim();

    if (userInput === 'yes') {
        alert("Pizza night every Saturday night at 8PM - Pier 88");

    } else {
        alert("Thank you!");
    }
});
