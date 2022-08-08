const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click"),
    () => {
      console.log("ok");
    };
});

somar.addEventListener("click", () => {
  controlaNivel("somar");
});

subtrair.addEventListener("click", () => {
  controlaNivel("subtrair");
});

function controlaNivel(operacao) {
  if (operacao === "subtrair") {
    braco.value = parseInt(braco.value) - 1;
  } else {
    braco.value = parseInt(braco.value) + 1;
  }
}
