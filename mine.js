alert ("WELCOME TO ROYAL BITE RESTAURANT")
document. getElementById("reservationForm").addEventListener("submit",
    function(event) {
        event.preventDefault();

        alert(Thank you! Your table reservation has been received. Royal Bite looks forward to serving you!);
        this.reset();
    })

    document.getElementById("contactForm")
    .addEventListener("submit",
        function(event) {
            event.preventDefault();

            document.getElementById("successMessage").textContent = "Message sent successfully! Thank you for contacting Royal Bite Restaurant. We'll get back to you soon.";

            this.reset();
        }
        )

    



