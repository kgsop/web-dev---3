const http = require('http');
const user = [
    { id:101, name: 'John', email: "john@example.com" },
    { id:102, name: 'Jane', email:"jane@example.com" },
    { id:103, name: 'Bob', email:"bob@example.com" },
    { id:104, name: 'Alice', email:"alice@example.com"}
]

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.write('Welcome to the Home Page!');
        res.end();
    }else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to the About Page!');
        res.end();
    }
    else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to the Contact Page!');
        res.end();
    }
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('Page Not Found');
        res.end();
    }
    console.log(req.url);
    console.log(req.method);
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})