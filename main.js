const form = document.getElementById('novoItem')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    criaElemnto(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemnto (nome, quantidade) {
   
    const novoItem = document.createElement('li')
    novoItem.classList.add("Item")

    const numeroItem = document.createElement('Strong')
    numeroItem.innerHTML = quantidade
}