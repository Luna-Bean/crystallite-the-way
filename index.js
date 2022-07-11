document.querySelector('button').addEventListener('click', getRequest)

async function getRequest(){
    const days = document.querySelector('input').value
    
    try{
        const response = await fetch(`https://git.heroku.com/crystals-api.git/api/${days}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.day').innerHTML = data.day
        document.querySelector('.stone').innerHTML = data.stone
        document.querySelector('.planet'),innerHTML = data.planet
       }

    catch{
        console.log(error)
    }
}