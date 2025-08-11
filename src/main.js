document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();
            removeBotaoAtivo();

            aba.classList.add('shows__list--is-active');
            botao.target.classList.add('shows__tab__button--is-active');
        });
    }

    function escondeTodasAbas() {
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

    function removeBotaoAtivo() {
        const botoes = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < botoes.length; i++) {
            botoes[i].classList.remove('shows__tab__button--is-active');
        }
    }
});
