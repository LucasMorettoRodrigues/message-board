const createMessage = (author, title, message, date) => {
    const ul = document.querySelector('#message-container')

    const messageBox = document.createElement('li')

    const messageHeader = document.createElement('div')
    messageHeader.classList.add('message-header')
    const titleElement = document.createElement('h2')
    titleElement.textContent = title
    const dateElement = document.createElement('h4')
    dateElement.textContent = date

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

const fetchMessages = async () => {
    try {
        const response = await fetch('/messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'applications/json'
            }})
        const data = await response.json()
        data.data.map((message) => {
            createMessage(message.author, message.title, message.message, message.date)
        })
    } catch (error) {
        console.log(error)
    }
}

fetchMessages()

// submit form

const createMessageBtn = document.querySelector('#createMessageBtn')
createMessageBtn.addEventListener('click', async(e) => {
    e.preventDefault()

    const authorInput = document.querySelector('#author')
    const titleInput = document.querySelector('#title')
    const messageInput = document.querySelector('#message')

    const author = authorInput.value
    const title = titleInput.value
    const message = messageInput.value
    console.log('hi')
    const newMessage = { author: author, title: title, message: message, date: new Date() }

    try {
        await fetch('http://localhost:3000/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: newMessage }) 
        })
        window.location.href = "http://localhost:3000/"
    } catch (error) {
        console.log(error)
    }
})

