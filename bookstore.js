(function main() {
    getData()
})()

function getData() {
    fetch('https://api.myjson.com/bins/udbm5')
        .then(response => response.json())
        .then(data => {
            fillData(data)
            console.log(data)
        })
        .catch(error => console.error(error))
}

function fillData(data) {
    let container = document.querySelector('#container')
    for (let i = 0; i < data.books.length; i++) {

        let flipCard = document.createElement('div')
        flipCard.className = "flip-card"
        container.append(flipCard)

        let flipCardInner = document.createElement('div')
        flipCardInner.className = "flip-card-inner"
        flipCard.append(flipCardInner)

        let cardFront = document.createElement('div')
        cardFront.className = "flip-card-front"
        let image = document.createElement('IMG')
        image = new Image(350, 450)
        image.src = data.books[i].portada
        cardFront.append(image)
        flipCardInner.append(cardFront)

        let cardBack = document.createElement('div')
        cardBack.className = "flip-card-back"
        let titel = document.createElement('h3')
        titel.innerHTML = data.books[i].titulo
        cardBack.append(titel)
        let description = document.createElement('p')
        description.innerHTML = data.books[i].descripcion
        cardBack.append(description)
        flipCardInner.append(cardBack)

        let btn = document.createElement("BUTTON")
        btn.setAttribute("data-toggle", "modal")
        btn.setAttribute("data-target", "#exampleModalCenter" + i)
        btn.setAttribute("type","button")
        btn.className = "btn btn-warning"
        let text = document.createTextNode("See More")
        btn.appendChild(text)
        cardBack.appendChild(btn)

        let modal = document.createElement('div')
        modal.className = "modal fade"
        modal.id = "exampleModalCenter" + i
        modal.setAttribute("tabindex", "-1")
        modal.setAttribute("role", "dialog")
        modal.setAttribute("aria-labelledby", "exampleModalCenterTitle")
        modal.setAttribute("aria-hidden","true")
        container.appendChild(modal)

        let modalDialog = document.createElement('div')
        modalDialog.className = "modal-dialog modal-dialog-centered"
        modalDialog.setAttribute("role", "document")
        modal.appendChild(modalDialog)
        
        let modalContent = document.createElement('IMG')
        modalContent.className = "modal-content"
        modalContent.src = data.books[i].detalle
        modalDialog.appendChild(modalContent)

    }
}

