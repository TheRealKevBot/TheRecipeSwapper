const baseURl = 'http://localhost:3000';
const usersURL = 'http://localhost:3000/users';  

const profileContainer = document.querySelector('.profile-container')

fetch(`${usersURL}`)
    .then(response => response.json())
    .then(users => {
        console.log(users)
        users.forEach(showUser)
    })

function showUser(user){
    const userCard = document.createElement('div');
    userCard.classList.add('user-card')

    const userName = document.createElement('h1')
    userName.classList.add('username')
    userName.textContent = user.username

    const userImg = document.createElement('img')
    userImg.src = user.img
    userImg.alt = user.username 

    const usersName = document.createElement('h2')
    usersName.classList.add('users-name')
    usersName.textContent = `${user.f_name} ${user.l_name}`

    const email = document.createElement('h3')
    email.classList.add('email')
    email.textContent = `Current Email: ${user.email}`

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.textContent = "Delete this account?"

    const recipeList = document.createElement('section')
    recipeList.classList.add('recipe-list')
    user.recipes.forEach(showRecipeList)

    function showRecipeList(recipe){
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const recipeImg = document.createElement('img');
        recipeImg.classList.add("recipe-img");
        recipeImg.src = recipe.img
        recipeImg.alt = recipe.name;

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button')
        deleteButton.textContent = "🗑️"
        deleteButton.addEventListener('click', event => {
            fetch('http://localhost:3000/recipes', {
                method: "DELETE",
            }).then(response => response.json())
            .then(response => console.log(response))
        })

        const recipeTitle = document.createElement('h2');
        recipeTitle.classList.add('recipe-name');
        recipeTitle.textContent = recipe.name ;

        const recipeTime = document.createElement('h3');
        recipeTime.classList.add('recipe-time');
        recipeTime.textContent = `Time: ${recipe.time}`;

        const recipeDescription = document.createElement('h4');
        recipeDescription.classList.add('recipe-description');
        recipeDescription.textContent = recipe.description

        const recipeCreator = document.createElement('h5')
        recipeCreator.classList.add('recipe-creator')
        recipeCreator.textContent = `By ${recipe.creator}`

        recipeCard.append(deleteButton, recipeImg, recipeTitle, recipeCreator, recipeTime, recipeDescription)
        console.log(recipeCard)
        recipeList.append(recipeCard)
    } 

    const blogList = document.createElement('section')
    blogList.classList.add('blog-list')
    user.blogs.forEach(showBlogList)

    function showBlogList(blog){
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        const blogImg = document.createElement('img');
        blogImg.classList.add('blog-image');
        blogImg.src = blog.img
        blogImg.alt = blog.title; 

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button')
        deleteButton.textContent = "🗑️"

        const blogTitle = document.createElement('h2');
        blogTitle.classList.add('blog-title');
        blogTitle.textContent = blog.title; 

        const blogAuthor = document.createElement('h3');
        blogAuthor.classList.add('blog-author');
        blogAuthor.textContent = `By ${blog.author}`; 

        blogCard.append(deleteButton, blogImg, blogTitle, blogAuthor)
        console.log(blogCard)
        blogList.append(blogCard)
    }

    userCard.append(userName, deleteButton, userImg, usersName, email, recipeList, blogList)
    profileContainer.append(userCard)
    
}



