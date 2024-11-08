const listaTenis = document.querySelectorAll(".jogador");

listaTenis.forEach(jogador => {
    jogador.addEventListener("click", () => {
        esconderCartaoJogador();

        const idJogadorSelecionado = mostarCartaoJogador(jogador);

        desativarJogadorNaListagem();
        ativarJogadorNaListagem(idJogadorSelecionado);
    })
})

function ativarJogadorNaListagem(idJogadorSelecionado) {
    const jogadorAtivolistadd = document.getElementById(idJogadorSelecionado);

    jogadorAtivolistadd.classList.add("ativo");
}

function desativarJogadorNaListagem() {
    const jogadorAtivoList = document.querySelector(".ativo");
    jogadorAtivoList.classList.remove("ativo");
}

function mostarCartaoJogador(jogador) {
    const idJogadorSelecionado = jogador.attributes.id.value;
    const idCartaojogadorAbir = "cartao-" + idJogadorSelecionado;
    const cartaoJogadorAbrir = document.getElementById(idCartaojogadorAbir);
    cartaoJogadorAbrir.classList.add("aberto");
    return idJogadorSelecionado;
}

function esconderCartaoJogador() {
    const cartaoAberto = document.querySelector(".aberto");
    cartaoAberto.classList.remove("aberto");
}
