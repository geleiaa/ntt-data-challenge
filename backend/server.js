const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/:movie', async (req, res) =>{

    const search = req.params.movie;
    
    try{
    const movie = await fetch(`http://www.omdbapi.com/?t=${search}&plot=short&apikey=b9450d8c`)
    const data = await movie.json()

    res.json(data);

    }catch(err){
        throw new Error('Erro!!!')
    }
})

const port = 1234;
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})