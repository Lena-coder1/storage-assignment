document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save-btn");
    const clearButton = document.getElementById("clear-btn");
    const nameInput = document.getElementById("userName");
    const displayName = document.getElementById("display-name");

   // Check if a name is already saved in local storage
   if (localStorage.getItem("Name")) {
    displayName.textContent = localStorage.getItem("Name");
}

// Save Name Button
saveButton.addEventListener("click", function () {
    const Name = nameInput.value.trim();
  

    if (!Name) {
        alert("Please enter your first and last name.");
 
    } else {
        const fullName = `${userName}`;
        displayName.textContent = fullName;
        localStorage.setItem("fullName", fullName); // Save to local storage
    }
});

// Clear Name Button
clearButton.addEventListener("click", function () {
    nameInput.value = "";
    displayName.textContent = "";
    localStorage.removeItem("fullName"); // Clear saved name
});
});