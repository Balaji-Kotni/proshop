import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'balaji',
    email: 'balaji@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'prince',
    email: 'prince@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
