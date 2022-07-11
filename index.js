document.querySelector('.button').addEventListener('click', getRequest)

async function getRequest(){
    const days = document.querySelector('input').value
    
    try{
        const response = await fetch(`https://crystals-api.herokuapp.com/api/${days}`)
        
        const data = await response.json()

        console.log(data)
        document.querySelector('.day').innerText = data.day
        document.querySelector('.stone').innerText = data.stone
        document.querySelector('img').src = data.image
        document.querySelector('.planet').innerText = data.planet
        
       }catch(error){
        console.log(error)
    }
}