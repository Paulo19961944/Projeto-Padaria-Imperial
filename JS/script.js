var menu = document.querySelector('ul')
var btnMenu = document.getElementById('menuBtn')
var btnFechar = document.getElementById('fecharBtn')
btnMenu.addEventListener('click', abrirMenu)
btnFechar.addEventListener('click', fecharMenu)

// Criar Função para abrir o menu
function abrirMenu() {
    menu.style.display = 'flex'
    menu.style.flexDirection = 'column'
    menu.style.justifyContent = 'center'
    menu.style.alignItems = 'center'
    menu.style.gap = '48px'
    btnMenu.style.display = 'none'
    btnFechar.style.display = 'inline'
}

function fecharMenu(){
    menu.style.display = ''
    menu.style.flexDirection = ''
    menu.style.justifyContent = ''
    menu.style.alignItems = ''
    menu.style.gap = ''
    btnMenu.style.display = ''
    btnFechar.style.display = ''
}