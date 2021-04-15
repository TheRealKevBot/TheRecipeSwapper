const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id') 

const recipeShowContainer = document.querySelector('.recipe-show-container') 

fetch(`http://localhost:3000/recipes/${id}`)
    .then(response => response.json())
    .then(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        
        const recipeTitle = document.createElement('h2');
        recipeTitle.classList.add('recipe-name');
        recipeTitle.textContent = recipe.name ;
        
        const recipeImg = document.createElement('img');
        recipeImg.classList.add("recipe-img");
        recipeImg.src = recipe.img
        recipeImg.alt = recipe.name;
        
        const recipeCreator = document.createElement('h5')
        recipeCreator.classList.add('recipe-creator')
        recipeCreator.textContent = `By ${recipe.creator}` 

        const recipeTime = document.createElement('h3');
        recipeTime.classList.add('recipe-time');
        recipeTime.textContent = `Time: ${recipe.time}`;
    
        const recipeDescription = document.createElement('h4');
        recipeDescription.classList.add('recipe-description');
        recipeDescription.textContent = recipe.description 

        const recipeIngredients = document.createElement('span')
        recipeIngredients.classList.add('recipe-ingredients')
        recipeIngredients.textContent = recipe.ingredients
        
        // recipe.ingredients.forEach(showIngredients)
        // function showIngredients(ingredients){
        //     const rIngredients = document.createElement('span')

        //     const iingredients = document.createElement('li')
        //     iingredients.textContent = ingredients 

        //     console.log(ingredients)

        //     iingredients.append(rIngredients)
        //     rIngredients.append(recipeIngredients)
        // }

        const recipeInstructions = document.querySelector('div')
        recipeInstructions.classList.add('instructions')
        recipeInstructions.textContent = recipe.instructions

        recipeCard.append(recipeTitle, recipeImg, recipeCreator, recipeDescription, recipeIngredients, recipeInstructions)
        recipeShowContainer.append(recipeCard)
    
    })