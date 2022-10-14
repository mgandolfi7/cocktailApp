//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#getCocktail').addEventListener('click', getCocktail)

let choice = ""


function getCocktail() {
    let choice = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
    .then(res => res.json())
    .then(data => {

        let i = 0; 
        setInterval(() => {
            document.querySelector('h2').innerText = data.drinks[i].strDrink
            document.querySelector('img').src = data.drinks[i].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[i].strInstructions 
        
            i = i === data.drinks.length - 1 ? 0 : i+1
        
        }, 2000);

                   
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
}


