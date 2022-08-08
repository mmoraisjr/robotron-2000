const controle = document.querySelectorAll("[data-controle]");

controle.forEach( (elemento) => {
    elemento.addEventListener("click",
        (e) => {
            controlaNivel(e.target.dataset.controle, e.target.parentNode);
        })
});

function controlaNivel(operacao, componente) {
    const peca = componente.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;

    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
