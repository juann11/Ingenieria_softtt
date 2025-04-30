import express from 'express'

const app = express();

app.listen(3000, () => {
console.log('Server is running on port 3000')

});

//Crear un endpoint
app.get('/', (req, res) => {
    res.send('Hello World Motherfucker!')
});

app.post(
    "/create-user",
    (req, res) => {
    

    res.send('hello world')


    }
);


