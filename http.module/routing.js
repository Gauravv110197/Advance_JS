import http from 'http'

const server = http.createServer((req, res) => {
    console.log('hello world')
    console.log(req.url)
    res.end('Hello from the server')
})

server.listen(3001, "127.0.0.1", () => {
    console.log("Server is running on port 3001")
})