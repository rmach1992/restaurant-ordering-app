import { menuArray } from "./data.js";

const mainMenu = document.getElementById('main-menu')
const order = document.getElementById('order-content')
const orderedItems = []

document.addEventListener('click', function(e) {
    if(e.target.dataset.id) {
        handleAddClick(e.target.dataset.id)
    }
    // else if (e.target.id === 'remove-btn'){
    //     removeItem(e.target.parentNode)
    // }
})

function handleAddClick(id){
    const targetMenuObj = menuArray.filter(function(item){
        return item.id === parseInt(id)
    })[0]

    if(orderedItems.includes(targetMenuObj)) {
        orderedItems.forEach(function(item){
            if(item.id === targetMenuObj.id) {
                item.count++
            }
        })
    }
    else {
        targetMenuObj.count++
        orderedItems.push(targetMenuObj)
    }

    let total = 0
    orderedItems.forEach(function(item){
        total += (item.count * item.price)
    })

    const orderTotal = document.getElementById('total-price')
    orderTotal.innerHTML = `$${total}`
    render()
}

//currently removing every single item, also returning NaN
function removeItem(removeThis) {
    console.log(removeThis)
    order.innerHTML = order.innerHTML - removeThis
}

function getMenuData() {
    let menuHtml = ``
    menuArray.forEach(function(item){
        menuHtml += `
        <div class="menu-item">
            <p>${item.emoji}</p>
            <div class="menu-item-info">
                <h2>${item.name}</h2>
                <h4>${item.ingredients}</h4>
                <h3>$${item.price}</h3>
            </div>
            <button class="add-item-btn" data-id=${item.id}>+</button>
        </div>
        `
    })
    return menuHtml
}

function render() {
    mainMenu.innerHTML = getMenuData()
    
    order.innerHTML = ''

    if (orderedItems){
        orderedItems.forEach((item) => {
            order.innerHTML += `
            <div>
                <h2>${item.name}</h2>
                <button id="remove-btn">remove</button>
                <h4>${item.count}</h4> 
                <h3>$${item.price}</h3>
            </div>
            `
        })

    }
}

render()