var menu = document.querySelector('ul') // Seleciona o Menu
var btnMenu = document.getElementById('menuBtn') // Seleciona o Botão de Menu Hamburguer
var btnFechar = document.getElementById('fecharBtn') // Seleciona o botão de fechar
var bodyElement = window.document.body // Seleciona o Conteúdo HTML
btnMenu.addEventListener('click', abrirMenu) // Adiciona evento ao menu hamburguer
btnFechar.addEventListener('click', fecharMenu) // Adiciona evento ao menu fechar

// Criar Função para abrir o menu
function abrirMenu() {
    bodyElement.style.overflow = 'hidden' // Trava a tela
    menu.style.display = 'flex' // Flexbox
    menu.style.flexDirection = 'column' // Elementos em Colunas
    menu.style.justifyContent = 'center' // Alinha ao centro no eixo principal
    menu.style.alignItems = 'center' // Alinha ao centro no eixo horizontal
    menu.style.gap = '48px' // Espaçamento entre os elementos
    btnMenu.style.display = 'none' // Oculta o Botão Hamburguer
    btnFechar.style.display = 'inline' // Aparece o botão fechar
}

// Criar função para fechar menu
function fecharMenu(){
    window.location.reload() // Recarrega a Página
}