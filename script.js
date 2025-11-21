let buttonToggleMenu = document.getElementById("button-toggle-menu");
let menu = document.getElementById("nav-menu");
let btnMenuItem = document.querySelectorAll(".btn-menu-item");

btnMenuItem.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("drop-menu")
    })
})

buttonToggleMenu.addEventListener("click", function () {
    menu.classList.toggle("drop-menu")
})

let itensEspecialidade = Array.from(document.querySelectorAll(".item-especialidade"));
let especCurrent = 0;

function AlterarEspecialidade(direction) {
    let currentItem = itensEspecialidade[especCurrent];

    // Definir próximo índice
    if (direction === "next") {
        especCurrent = (especCurrent + 1) % itensEspecialidade.length;
        currentItem.classList.add("prev");
    } else if (direction === "prev") {
        especCurrent = (especCurrent - 1 + itensEspecialidade.length) % itensEspecialidade.length;
        currentItem.classList.add("next");
    }

    let nextItem = itensEspecialidade[especCurrent];

    // Adiciona a classe active no novo item e remove das antigas
    setTimeout(() => {
        itensEspecialidade.forEach(item => item.classList.remove("active", "prev", "next"));
        nextItem.classList.add("active");
    }, 300); // Tempo suficiente para a animação acontecer
}

// Inicializa o primeiro item como ativo
itensEspecialidade[especCurrent].classList.add("active");

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: false,
        dots: true,
        nav: false,
        responsive: {
            0: { items: 1 }, // 1 item visível em telas pequenas
            670: { items: 2 }, // 2 itens visíveis em telas médias
            1000: { items: 3 } // 3 itens visíveis em telas grandes
        }
    });
});