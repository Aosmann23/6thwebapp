// Grab the form and the status paragraph from the HTML Document Object Model (DOM)
let contactForm = document.getElementById("contact-form");
let formStatus = document.getElementById("form-status");

// Listen for the user clicking the Submit button
contactForm.addEventListener("submit", function(event) {
    
    // Prevent the default browser behavior (which is to refresh the page)
    event.preventDefault();
    
    // Retrieve the value the user typed into the Name field
    let visitorName = document.getElementById("visitor-name").value;
    
    // Inject a dynamic success message into the HTML
    formStatus.innerHTML = "Thank you, " + visitorName + "! Your message has been successfully sent.";
    
    // Change the text color to green to indicate success
    formStatus.style.color = "#16a34a"; 
    
    // Clear the form fields after submission
    contactForm.reset();
});
