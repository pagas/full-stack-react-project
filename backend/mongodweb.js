import { createServer } from 'http'
import { MongoClient } from 'mongodb'

const hostname = '127.0.0.1'
const port = 3000

const url = 'mongodb://localhost:27017/'
const dbName = 'ch2'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Successfully connected to database!')
} catch (err) {
  console.error('Error connecting to database:', err)
}

const server = createServer(async (req, res) => {
  const db = client.db(dbName)
  const users = db.collection('users')
  const usersList = await users.find().toArray()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(usersList))
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
