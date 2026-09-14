import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    const html = fs.readFileSync('./index.html', 'utf8');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(9000, '127.0.0.1', () => {
    console.log('Server is running on port 9000');
});