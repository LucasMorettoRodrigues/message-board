const cancelBtn = document.querySelector('#cancelBtn')
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "https://dry-sierra-93572.herokuapp.com/"
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

    date = new Date()
    const dateFormated = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 


    const newMessage = { name: name, title: title, message: message, date: dateFormated }

    try {
        await fetch('/new', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: newMessage }) 
        })
        window.location.href = "https://dry-sierra-93572.herokuapp.com/"
    } catch (error) {
        console.log(error)
    }
})