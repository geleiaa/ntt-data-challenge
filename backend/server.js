const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/:movie', async (req, res) =>{

    const search = req.params.movie;
    console.log('Movie', search);

    try{
    const movie = await fetch(`http://www.omdbapi.com/?t=${search}&apikey=b9450d8c`)
    const data = await movie.json()

    console.log('DataMovie', data);
    res.send({ data: data });
    }catch(err){
        console.log('BACK-ERRO', err);
    }
})

const port = 1234;
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})