const burger = document.querySelector(".close-open");
const menuStuff = document.querySelectorAll(".hide");
const openBtn = document.querySelector("#open")
const closeBtn = document.querySelector("#close")
const rightMenu = document.querySelector(".right-menu")
let closed = true;
rightMenu.style.height = "60px"
burger.addEventListener("click", () => {
    if (closed) {
        burger.style.backgroundColor = "var(--purple)";
        rightMenu.style.height = "auto"
        menuStuff.forEach((element) => {
            // element.style.position = "relative";
            element.style.marginLeft = "0px";
            // element.style.visibility = "collapse"
            openBtn.style.display = "none"
            closeBtn.style.display = "grid"
        });
        closed = false;
    } else {
        burger.style.backgroundColor = "transparent";
        rightMenu.style.height = "60px"
        menuStuff.forEach((element) => {
            // element.style.position = "absolute";
            element.style.marginLeft = "10000px";
            // element.style.visibility = "visible"
            closeBtn.style.display = "none"
            openBtn.style.display = "grid"
        });
        closed = true;
    }
});
