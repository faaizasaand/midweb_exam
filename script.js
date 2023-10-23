// Get references to elements
const menuButton = document.querySelector('.home');
const menu = document.querySelector('.home-parent');
const contactForm = document.querySelector('.group-container');
const submitButton = document.querySelector('.submit-request');

// Function to toggle the menu
menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Function to handle form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // You can add form submission logic here
  // For example, send the form data to a server using AJAX
  // Display a success message to the user
  alert('Form submitted!'); // You can replace this with your logic
});

// Function to handle the "Submit Request" button click
submitButton.addEventListener('click', () => {
  // You can add logic to handle the button click here
});
document.addEventListener("DOMContentLoaded", function () {
    // Get references to your HTML elements
    const signInButton = document.querySelector(".sign-in");
    const getStartedButton = document.querySelector(".get-started");
    const submitRequestButton = document.querySelector(".submit-request");
  
    const nameInput = document.querySelector(".eg-zoya-memon");
    const emailInput = document.querySelector(".eg-zoyamemon767gmailcom");
    const contactInput = document.querySelector(".eg-contact-number");
    const commentInput = document.querySelector(".eg-requesting-for");
  
    // Add click event listeners to buttons
    signInButton.addEventListener("click", function () {
      alert("Sign In button clicked");
    });
  
    getStartedButton.addEventListener("click", function () {
      alert("Get Started button clicked");
    });
  
    submitRequestButton.addEventListener("click", function () {
      const name = nameInput.value;
      const email = emailInput.value;
      const contact = contactInput.value;
      const comment = commentInput.value;
  
      alert(`Submitted Request:\nName: ${name}\nEmail: ${email}\nContact: ${contact}\nComment: ${comment}`);
    });
  });