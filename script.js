let buttonToggleMenu = document.getElementById("button-toggle-menu");
let menu = document.getElementById("nav-menu");

buttonToggleMenu.addEventListener("click", function () {
    menu.classList.toggle("drop-menu")
})

// let itensEspecidalidade = Array.from(document.querySelectorAll(".item-especialidade"));

// let especCurrent = 0;

// function AlterarEspecialidade(direction) {
//     if(direction == "prev") {
//         especCurrent--;
//     }

//     if(direction == "next") {
//         especCurrent++;
//     }
    
//     if(especCurrent > 5 ) especCurrent = 0;
//     if(especCurrent < 0) especCurrent = 5;

//     itensEspecidalidade.forEach((item, index) => {
//         item.style.display = "none";
//         if(especCurrent == index) item.style.display = "block";
//     });
// }

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
