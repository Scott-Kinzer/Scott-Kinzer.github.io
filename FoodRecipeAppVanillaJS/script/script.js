const searchBtn  = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetails = document.querySelector('.meal__details-content');
const recipeCloseBtn = document.getElementById('recipe__close-btn');


recipeCloseBtn.addEventListener('click', () => {
    mealDetails.parentElement.classList.remove('showRecipe');
    document.querySelector("body").style.overflow = "";
})

searchBtn.addEventListener('click', () => {

    let searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.meals) {
            data.meals.forEach(item => {
                html += `<div class="meal__item" data-id = "${item.idMeal}">
                <div class="meal__img">
                    <img src="${item.strMealThumb}" alt="">
                </div>
                <div class="meal__name">
                    <h3>${item.strMeal}</h3>
                    <a href="" class="recipe__btn">Get recipe</a>
                </div>
            </div>`;
            });
        } else {
            html = "We didn't find a meal";
        }

        mealList.innerHTML = html;


    });
});

mealList.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector("body").style.overflow = "hidden";

    if (e.target.classList.contains('recipe__btn')) {
        
        let mealItem = e.target.parentElement.parentElement;
        console.log(mealItem.dataset.id);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => {
            mealRecipeModal(data.meals);
        })
    }
});

function mealRecipeModal(meal) {
    meal = meal[0];
    let html = `
    <h2 class="recipe__title">${meal.strMeal}</h2>
                        <p class="recipe__category">${meal.strCategory}</p>
                        <div class="recipe__instruct">
                            <h3>Instruction</h3>
                          ${meal.strInstructions}
                            
                        </div>
                        <div class="recipe__meal-img">
                            <img src="${meal.strMealThumb}" alt="">
                        </div>
                        <div class="recipe__link">
                            <a href="${meal.strYoutube}" target="_blank">Video</a>
                        </div>
    `;

    mealDetails.innerHTML = html;
    mealDetails.parentElement.classList.add('showRecipe');
}


