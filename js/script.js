
function isMenuVisible(){
    return menuDom.classList.contains("active")
}

function toggleMenu(){
    if(isMenuVisible())
        hideMenu()
    else
        showMenu()
}

function showMenu(){
    console.log("Showing Menu")
    menuDom.classList.add("active")
}

function hideMenu(){
    console.log("Hidding Menu")
    menuDom.classList.remove("active")
}

menuDom = document.getElementsByClassName("menu")[0]
menuButton = document.getElementsByClassName("menu_button")[0]
console.log(menuButton)
menuButton.onclick = () => {
    console.log("Toggling Menu")
    toggleMenu()
}