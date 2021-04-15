const signupForm = document.querySelector('.sign-up-form')
const message = document.querySelector('.message')

signupForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password_digest'),
                f_name: formData.get('f_name'),
                l_name: formData.get('l_name'),
                email:  formData.get('email'),
        })
    })
    window.location.replace('http://localhost:3001/')
    // .then(response => response.json())
    // .then(response => { 
    //     console.log(response)
    //     const {  } = response.user
        // const { username, password } = response.user
        // message.textContent = `Username is ${username}, and password is ${password}`
    // })
})
