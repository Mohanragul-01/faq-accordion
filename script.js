const show = document.querySelectorAll(".plus");
const hide = document.querySelectorAll(".minus");
const cont = document.querySelectorAll(".para");

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener("click", () => {
        show[i].classList.toggle("hide");
        hide[i].classList.toggle("hide");
        cont[i].classList.toggle("hide");
    });
};

for (let i = 0; i < hide.length; i++) {
    hide[i].addEventListener("click", () => {
        show[i].classList.toggle("hide");
        hide[i].classList.toggle("hide");
        cont[i].classList.toggle("hide");
    });
};
