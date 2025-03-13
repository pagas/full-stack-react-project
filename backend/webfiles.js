import { createServer } from 'http'
import { readFileSync } from 'fs'

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  const usersJson = readFileSync('backend/users.json')
  res.end(usersJson)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
