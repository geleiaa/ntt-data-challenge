const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/', async (req, res) =>{

    const search = req.body;
    console.log('Movie', search);

    const movie = await fetch(`http://www.omdbapi.com/?t=${search}&apikey=b9450d8c`)
                        .then(resp => console.log(resp))
                        .catch(err => console.log(err))

    res.json({ back: movie });
})

const port = 1234;
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})