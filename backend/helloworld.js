import { writeFileSync, readFileSync } from 'fs'
console.log('Hello, world!')

const users = [
  { name: 'Alice', email: 'adamn@mail.com' },
  { name: 'Bob', email: 'bob@email' },
]

const usersJson = JSON.stringify(users)
writeFileSync('backend/users.json', usersJson)

const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)

console.log(readUsers)
