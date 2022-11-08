import { menuArray } from "./data.js";

const mainMenu = document.getElementById('main-menu')

function getMenuData() {
    let menuHtml = ``
    menuArray.forEach(function(item){
        menuHtml += `
        <div class="menu-item">
            <p>${item.emoji}</p>
            <div class="menu-item-info">
                <h2>${item.name}</h2>
                <h4>${item.ingredients}</h4>
                <h3>${item.price}</h3>
            </div>
            <button class="add-item-btn">+</button>
        </div>
        `
    })
    return menuHtml
}

function render() {
    mainMenu.innerHTML = getMenuData()
}

render()