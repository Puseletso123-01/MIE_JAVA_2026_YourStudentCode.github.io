document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    if(!email.includes("@")){
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";

});