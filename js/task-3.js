const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output")

nameInput.addEventListener("input", handleInput);

function handleInput(event){
    const name = event.target.value.trim();
    nameOutput.textContent = name ? name : "Annoymous";
    console.log(event);
};