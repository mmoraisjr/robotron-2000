const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click",
        (e) => {
            controlaNivel(e.target.textContent, e.target.parentNode);
        })
});

function controlaNivel(operacao, componente) {
    const peca = componente.querySelector(".controle-contador");

    if (operacao === controle.textContent) {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
