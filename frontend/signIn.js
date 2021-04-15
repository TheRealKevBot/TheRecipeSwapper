const loginForm = document.querySelector('.sign-in-form')
const message = document.querySelector('.message')

loginForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    let username = formData.get('username')
    let password = formData.get('password_digest')

    fetch("http://localhost:3000/users", {
        method: 'GET',
        headers: {
            'Content-type': "application/json"
        },
    //     body: JSON.stringify(
    //             username,
    //             password 
    //     )
    })
    window.location.replace('http://localhost:3001/')
    // .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    //     // window.location.replace(`https:localhost:3000/users/${user}`)
    //     const { username, password } = response.user
    //     message.textContent = `Username is ${username}, and password is ${password}`
    // })
})

