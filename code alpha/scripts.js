// Sample data (you might want to use a database in a real application)
let recipes = [];

function addEditRecipe() {
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Check if recipeName already exists for editing, otherwise add a new recipe
    const existingRecipeIndex = recipes.findIndex(recipe => recipe.name === recipeName);

    if (existingRecipeIndex !== -1) {
        // Edit existing recipe
        recipes[existingRecipeIndex] = { name: recipeName, ingredients, instructions };
    } else {
        // Add new recipe
        recipes.push({ name: recipeName, ingredients, instructions });
    }

    displayRecipes();
    clearForm();
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

function displayRecipes() {
    const recipeListSection = document.getElementById('recipe-list');
    recipeListSection.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteRecipe(index));

        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;

        recipeCard.appendChild(deleteButton);
        recipeListSection.appendChild(recipeCard);
    });
}

function clearForm() {
    document.getElementById('recipe-name').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

// Initialize the page
displayRecipes();
