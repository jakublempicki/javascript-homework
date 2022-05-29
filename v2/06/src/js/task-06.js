let input = document.querySelector("#validation-input")

input.addEventListener("blur", () => {
    if (input.value.length === 6) {
        input.classList.add("valid");
    } else {
        input.classList.add("invalid")

    }
});