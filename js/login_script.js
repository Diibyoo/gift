document.getElementById("loginForm").addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Simulate successful login
  // You can replace this with your actual login logic
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Madhurima" && password === "30/03/2022") {
    // Redirect to the desired page after successful login
    window.location.href = "home.html";
  } else {
    // Display login error message
    alert("Invalid username or password. Please try again.");
  }
});

