document.getElementById("generate-btn").addEventListener("click", async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  const meal = data.meals[0];

  document.getElementById("meal-title").textContent = meal.strMeal;
  document.getElementById("meal-image").src = meal.strMealThumb;
  document.getElementById("meal-image").style.display = "block";
  document.getElementById("meal-image").alt = meal.strMeal;
  document.getElementById("meal-instructions").textContent =
    meal.strInstructions;
  document.getElementById("meal-video").href = meal.strYoutube;
  document.getElementById("meal-video").style.display = "block";
});
