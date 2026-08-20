const recipes = [
  {name:"Grilled Meat",method:"Grilling",ingredients:"Meat",effect:"Immediate personal HP recovery"},
  {name:"Fish and Chips",method:"Grilling",ingredients:"Dwarf Potato + Fish",effect:"Instant team heal + recovery over time"},
  {name:"Fish Steak",method:"Grilling",ingredients:"Fish + Vegetables + Mushrooms",effect:"Personal percentage-based HP recovery"},
  {name:"Grilled Fish",method:"Grilling",ingredients:"Fish",effect:"Reliable early recovery food"},
  {name:"Honey Tea",method:"Boiling",ingredients:"Honey + Herbs",effect:"Instant revive + restored HP"},
  {name:"Seafood Paella",method:"Boiling",ingredients:"Meat + Fish + Grains",effect:"Team maximum HP increase"},
  {name:"Herbal Tea",method:"Boiling",ingredients:"Vegetables + Herbs",effect:"Revival support"},
  {name:"Orbis-style Special Stew",method:"Boiling",ingredients:"Meat + Fish + Seafood",effect:"Long-duration team combat buff"},
  {name:"Assorted Salad",method:"Slice",ingredients:"Vegetables + Herbs + Mushrooms",effect:"Remove all team status effects"},
  {name:"Cereal",method:"Slice",ingredients:"Peanuts",effect:"Increase Rage gained from attacks"},
  {name:"Sashimi",method:"Slice",ingredients:"Fish",effect:"Light utility preparation"},
  {name:"Seafood Ceviche",method:"Slice",ingredients:"Seafood + Vegetables",effect:"Utility food for exploration"}
];

const recipeGrid = document.querySelector("#recipe-grid");
const recipeSearch = document.querySelector("#recipe-search");
const resultCount = document.querySelector("#result-count");
let selectedMethod = "all";

function renderRecipes() {
  const query = recipeSearch.value.trim().toLowerCase();
  const visibleRecipes = recipes.filter((recipe) => {
    const matchesMethod = selectedMethod === "all" || recipe.method === selectedMethod;
    const searchableText = `${recipe.name} ${recipe.ingredients} ${recipe.effect}`.toLowerCase();
    return matchesMethod && searchableText.includes(query);
  });

  resultCount.textContent = `${visibleRecipes.length} RECIPES SHOWN`;
  recipeGrid.innerHTML = visibleRecipes.length
    ? visibleRecipes.map((recipe, index) => `<article class="recipe-card">
        <div class="recipe-meta"><span>${recipe.method.toUpperCase()}</span><span>${String(index + 1).padStart(2, "0")}</span></div>
        <h3>${recipe.name}</h3>
        <p>${recipe.ingredients}</p>
        <p class="effect">${recipe.effect}</p>
      </article>`).join("")
    : '<p class="empty">No matching recipe. Try a dish, ingredient, or another method.</p>';
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    selectedMethod = button.dataset.method;
    renderRecipes();
  });
});

document.querySelectorAll("[data-search]").forEach((link) => {
  link.addEventListener("click", () => {
    recipeSearch.value = link.dataset.search;
    selectedMethod = "all";
    document.querySelector(".filter.is-active").classList.remove("is-active");
    document.querySelector('[data-method="all"]').classList.add("is-active");
    renderRecipes();
  });
});

recipeSearch.addEventListener("input", renderRecipes);
renderRecipes();
