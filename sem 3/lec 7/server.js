const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to the Home Page!');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to the About Page!');
        res.end();
    }
    else if (req.url === '/contact') {
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