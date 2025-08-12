AOS.init({ duration: 800, once: true });

emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
            document.getElementById("form-status").textContent = "✅ Message sent successfully!";
            this.reset();
        }, (err) => {
            document.getElementById("form-status").textContent = "❌ Failed to send message.";
            console.error(err);
        });
});
