function openMenu() {
    let x = document.getElementById("nav-items");
    if(x.style.translate === "50vw") {
        x.style.translate = "0vw";
    } else {
        x.style.translate = "50vw";
    }
}