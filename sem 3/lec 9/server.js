const express = require('express');
const app = express();
const PORT = 3000;

const user = [
    { id:101, name: 'John', email: "john@example.com" },
    { id:102, name: 'Jane', email:"jane@example.com" },
    { id:103, name: 'Bob', email:"bob@example.com" },
    { id:104, name: 'Alice', email:"alice@example.com"}
]

app.get('/about', (req, res) => {
    res.send('Welcome to the About Page!');
});
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/users', (req, res) => {
    res.json(user);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});  
