import { cards } from "../Cards/Cards.js";

export default function recipe(recipeDiv,recipes,bakery){
    let select = document.createElement('select');
recipes.forEach(recipe => {
    let option = document.createElement('option');
    option.innerText=recipe.name
    select.appendChild(option)
});
    let button = document.createElement('button');
    button.innerText='Bake Now';
    button.addEventListener('click',()=>{
        bakery.summonPie(cards[select.value])
    })
    recipeDiv.appendChild(select);
    recipeDiv.appendChild(button)
}