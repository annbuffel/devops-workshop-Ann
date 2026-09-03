document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const message = document.querySelector("#message, .message");

    if (!button || !message) {
        return;
    }

    function showGreeting() {
        message.textContent =
            "Welcome! We're glad you're here. Enjoy the workshop.";
    }

    button.addEventListener("click", showGreeting);

    button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showGreeting();
        }
    });
});