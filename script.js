//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;

            // Allow only numbers
            if (!/^\d$/.test(value)) {
                e.target.value = "";
                return;
            }

            // Move to next input if a digit is entered
            if (value !== "" && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (input.value === "" && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
});
