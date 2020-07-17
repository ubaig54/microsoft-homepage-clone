let allMicrosoft = document.getElementById("allMicrosoft");
let megaDropdown = document.getElementById("megaDropdown");
let dropdownFlag = false;

// open and close dropdown by clicking button
allMicrosoft.onclick = () => {
    if (dropdownFlag) {
        megaDropdown.style.cssText = "height: 0; opacity: 0; padding: 0;";
        dropdownFlag = false;
    } else {
        megaDropdown.style.cssText = "height: auto; opacity: 1; padding: 20px;";
        dropdownFlag = true;
    }
}

// close dropdown while cllicking outside
window.onmouseup = (e) => {
    if (e.target != megaDropdown) {
        megaDropdown.style.cssText = "height: 0; opacity: 0; padding: 0;";
        dropdownFlag = false;
    }
}

let menu = document.getElementById("menu");
let closeMenu = document.getElementById("closeMenu");
let nav = document.getElementById("nav");
let rightNav = document.getElementById("rightNav");

// open menu and change the menu-icon to close-icon
menu.onclick = () => {
    nav.style.display = "block";
    rightNav.style.display = "block";

    menu.style.display = "none";
    closeMenu.style.display = "block";
}

// close menu and change the close-icon to menu-icon
closeMenu.onclick = () => {
    nav.style.display = "none";
    rightNav.style.display = "none";

    menu.style.display = "block";
    closeMenu.style.display = "none";
}