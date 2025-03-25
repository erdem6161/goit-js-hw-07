function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const create = document.querySelector("button[data-create]");
  const destroy = document.querySelector("button[data-destroy]");
  const input = document.querySelector("input");
  const boxes = document.querySelector("#boxes");
  
  create.addEventListener("click", (event) => {
    event.preventDefault();
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
      alert("Lütfen 1-100 arasında bir sayı giriniz.");
      input.value = "";
      return;
    }
  
    createBoxes(amount);
  });
  
  destroy.addEventListener("click", destroyBoxes);
  
  function createBoxes(amount) {
    console.log("createBoxes çalıştı!");
    let width = 30;
    let height = 30;
  
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${width}px`;
      div.style.height = `${height}px`;
      div.style.backgroundColor = getRandomHexColor();
  
      boxes.appendChild(div);
  
      width += 10;
      height += 10;
    }
  }
  
  function destroyBoxes() {
    boxes.innerHTML = "";
  }