const cancelBtn = document.querySelector('#cancelBtn')
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "http://localhost:3000/"
})

// submit form

const createMessageBtn = document.querySelector('#createMessageBtn')
createMessageBtn.addEventListener('click', async(e) => {
    e.preventDefault()

    const nameInput = document.querySelector('#name')
    const titleInput = document.querySelector('#title')
    const messageInput = document.querySelector('#message')

    const name = nameInput.value
    const title = titleInput.value
    const message = messageInput.value

    if (name === '' || title === '' || message === '') {
        return alert('Please, fill all the camps')
    }

    console.log('hi')
    const newMessage = { name: name, title: title, message: message, date: new Date() }

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