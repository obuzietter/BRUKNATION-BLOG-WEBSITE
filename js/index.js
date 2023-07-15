const burger = document.querySelector(".close-open");
const menuStuff = document.querySelectorAll(".hide");
const openBtn = document.querySelector("#open")
const closeBtn = document.querySelector("#close")
let closed = true;

burger.addEventListener("click", () => {
    if (closed) {
        burger.style.backgroundColor = "var(--purple)";
        menuStuff.forEach((element) => {
            // element.style.position = "relative";
            element.style.marginLeft = "0px";
            openBtn.style.display = "none"
            closeBtn.style.display = "grid"
        });
        closed = false;
    } else {
        burger.style.backgroundColor = "transparent";
        menuStuff.forEach((element) => {
            // element.style.position = "absolute";
            element.style.marginLeft = "10000px";
            closeBtn.style.display = "none"
            openBtn.style.display = "grid"
        });
        closed = true;
    }
});
