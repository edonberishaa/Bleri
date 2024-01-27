window.onload = function() {
    // Prompt for name
    var enteredName = prompt("Please enter your name:");

    // Check if a name was entered
    if (enteredName !== null && enteredName !== "") {
        // Display the entered name in an alert
        // Append the name to the heading in the HTML
        var heading = document.getElementById("name");
        heading.innerHTML = "Pershendetje " + enteredName + "!" + " Shiko";
    } else {
        alert("No name entered.");
    }
};
