import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kim Phong',
    email: 'phong@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Do Kim Phong',
    email: 'kimphong@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
