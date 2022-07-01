const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener("keydown", (e) => {
        const keyPressed = e.key;

        if (keyPressed >= 0 && keyPressed <= 9) {
            codes[index].value = "";
            if (index < codes.length - 1) {
                setTimeout(() => codes[index + 1].focus(), 10);
            }
        } else if (keyPressed === "Backspace") {
            if (index > 0) {
                setTimeout(() => codes[index - 1].focus(), 10);
            }
        }
    });
});
