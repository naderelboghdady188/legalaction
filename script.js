document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 الموقع جاهز للعمل!");

    // تحسين تجربة نموذج الاتصال
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("✅ تم إرسال رسالتك بنجاح!");
        contactForm.reset();
    });
});
