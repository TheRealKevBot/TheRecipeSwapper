const baseURl = 'http://localhost:3000';
const recipesURL = 'http://localhost:3000/recipes';   

const recipeContainer = document.querySelector('.recipe-container')

fetch(recipesURL)
    .then(response => response.json())
    .then(recipes => {
        console.log(recipes)
        recipes.forEach(showRecipe)
    }) 

function showRecipe(recipe){
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeImg = document.createElement('img');
    recipeImg.classList.add("recipe-img");
    recipeImg.src = recipe.img
    recipeImg.alt = recipe.name;

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

    const viewButton = document.createElement('button')
    viewButton.classList.add('show-page')
    viewButton.textContent = "🍳 Cook It 🍳"
    viewButton.addEventListener('click', () => {
        window.location.replace(`recipeShowPage.html?id=${recipe.id}`)
    })

    recipeCard.append(recipeImg, recipeTitle, recipeCreator, recipeTime, recipeDescription, viewButton)
    console.log(recipeCard)
    recipeContainer.append(recipeCard)
}
