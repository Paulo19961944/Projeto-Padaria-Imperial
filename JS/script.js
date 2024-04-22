var menu = document.querySelector('ul') // Seleciona o Menu
var btnMenu = document.getElementById('menuBtn') // Seleciona o Botão de Menu Hamburguer
var btnFechar = document.getElementById('fecharBtn') // Seleciona o botão de fechar
var bodyElement = window.document.body // Seleciona o Conteúdo HTML
btnMenu.addEventListener('click', abrirMenu) // Adiciona evento ao menu hamburguer
btnFechar.addEventListener('click', fecharMenu) // Adiciona evento ao menu fechar

// Criar Função para abrir o menu
function abrirMenu() {
    bodyElement.classList.add('body-responsive') // Trava a tela
    menu.classList.add('menu-responsive') // Aparece o Menu na Tela
    btnMenu.classList.add('abrir-menu-responsive') // Oculta o Botão Hamburguer
    btnFechar.classList.add('fechar-menu-responsive')// Aparece o botão fechar
}

// Criar função para fechar menu
function fecharMenu(){
    bodyElement.classList.remove('body-responsive')
    menu.classList.remove('menu-responsive')
    btnMenu.classList.remove('abrir-menu-responsive') 
    btnFechar.classList.remove('fechar-menu-responsive')
}