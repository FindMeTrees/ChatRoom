// Function to simulate logging out and redirecting to login page
function logout() {
    localStorage.removeItem("username"); // Clear the username from localStorage
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageList = document.getElementById("messageList");
    const username = localStorage.getItem("username") || "Guest"; // Default to "Guest"

    if (messageInput.value) {
        const messageElement = document.createElement("li");
        messageElement.textContent = `${username}: ${messageInput.value}`; // Add username to message
        messageList.appendChild(messageElement);

        // Scroll to the bottom of the message list
        messageList.scrollTop = messageList.scrollHeight;

        // Clear the message input
        messageInput.value = "";
    }
}

// Event listener for "Enter" key to send message
document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent the default behavior (e.g., form submission)
        sendMessage();  // Call the sendMessage function
    }
});
