function adicionaItem (event){
    const main = document.getElementById('container')
    const newItem = document.createElement('article')
    main.insertAdjacentElement('beforeend', newItem)
    newItem.setAttribute('class', 'item')
    newItem.setAttribute('onclick', 'removeItem(event)')
}

function removeItem (event) {
    event.target.remove()
}