const inputs = document.querySelectorAll(".js-clearable");

inputs.forEach((input) => {
  const button = input.nextElementSibling;

  toggleButtonVisibility(input, button);

  input.addEventListener("input", () => {
    toggleButtonVisibility(input, button);
  });

  button.addEventListener("click", () => {
    input.value = "";
    toggleButtonVisibility(input, button);
  });
});

function toggleButtonVisibility(input, button) {
  if (input.value === "") {
    button.classList.remove("visible");
  } else {
    button.classList.add("visible");
  }
}
