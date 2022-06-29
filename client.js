
document.querySelector('button').addEventListener('click', getDay){
    function getDay(){
let beta = document.querySelector('input').value
fetch ()

.then(res => res.json())
.then(data =>{
    consolelog(data)
})
document.querySelector.apply('p').innerText=data
}
}


// document.querySelector('button').addEventListener('click', getDrink )


//     function getDrink(){
//         let drink = document.querySelector('input').value

//         fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.drinks)
//             document.querySelector('.nameOne').innerText = data.drinks[2].strDrink
//             document.querySelector('.imageOne').src = data.drinks[2].strDrinkThumb

//             document.querySelector('.nameTwo').innerText = data.drinks[18].strDrink
//             document.querySelector('.imageTwo').src = data.drinks[18].strDrinkThumb

//             document.querySelector('.nameThree').innerText = data.drinks[4].strDrink
//             document.querySelector('.imageThree').src = data.drinks[4].strDrinkThumb
            