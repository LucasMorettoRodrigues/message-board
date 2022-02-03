const createMessage = (name, title, message, date) => {
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
    const nameElement = document.createElement('h3')
    nameElement.textContent = name
    const messageElement = document.createElement('p')
    messageElement.textContent = message

    messageBody.append(nameElement)
    messageBody.append(messageElement)

    messageBox.append(messageHeader)
    messageBox.append(messageBody)

    ul.append(messageBox)
}

const fetchMessages = async () => {
    try {
        const response = await fetch('/messages', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'applications/json'
            }})
        const data = await response.json()
        data.data.map((message) => {
            createMessage(message.name, message.title, message.message, message.date)
        })
    } catch (error) {
        console.log(error)
    }
}

fetchMessages()



