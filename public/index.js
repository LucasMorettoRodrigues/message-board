const createMessage = (author, title, message) => {
    const ul = document.querySelector('#message-container')

    const messageBox = document.createElement('li')

    const messageHeader = document.createElement('div')
    messageHeader.classList.add('message-header')
    const titleElement = document.createElement('h2')
    titleElement.textContent = title
    const dateElement = document.createElement('h4')
    dateElement.textContent = Date.now()

    messageHeader.append(titleElement)
    messageHeader.append(dateElement)

    const messageBody = document.createElement('div')
    messageBody.classList.add('message-body')
    const authorElement = document.createElement('h3')
    authorElement.textContent = author
    const messageElement = document.createElement('p')
    messageElement.textContent = message

    messageBody.append(authorElement)
    messageBody.append(messageElement)

    messageBox.append(messageHeader)
    messageBox.append(messageBody)

    ul.append(messageBox)
}

const handleNewMessage = () => {
    const form = document.querySelector('#form')
    form.classList.remove('hidden')
}

const handleCreateMessage = (e) => {
    e.preventDefault()
    const form = document.querySelector('#form')
    form.classList.add('hidden')
    createMessage('eu', 'titulo de teste', 'mensagem de teste')
}

const newMessageBtn = document.querySelector('#newMessageBtn')
const createMessageBtn = document.querySelector('#createMessageBtn')

newMessageBtn.addEventListener('click', handleNewMessage)
createMessageBtn.addEventListener('click', handleCreateMessage)

