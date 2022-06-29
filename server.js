const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())



const crystals = {
    'Monday': {
        'stone': 'Selenite', 
        'planet': 'Moon',
    },
    'Tuesday' : {
        'stone': 'Jasper',
        'planet': 'Mars',
        },

    'Wednesday': {
        'stone':'Hematite',
        'planet':'Mercury',
    },
    'Thursday': {
        'stone':'Aventurine',
        'planet': 'Jupiter'
            },
    'Friday': {
        'stone':'Rhodonite',
        'planet': 'Venus',
            },
    'Saturday':{
        'stone': 'Hematite',
        'planet': 'Saturn',
            },
    'Sunday': {
        'stone': 'Citrine',
        'planet': 'Sun',
            },
        }

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})


app.get('/:day', (req, res) => {
    let crystalsDay = req.params.name.toLowerCase()
    if(crystals[crystalsDay]){
        res.json(crystals[crystalsDay])
    }else{
        res.json('please enter a day')
    }
})

app.listen(process.env.PORT|| PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})