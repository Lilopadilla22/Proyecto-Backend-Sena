const User = require('../models/User')

// Lo utilizaremos para crear usuarios
const createUser = async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json(user)
}

// Lo utilizaremos para obtener todos los usurios
const getUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

// Lo utilizaremos para actualizar usuarios
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(user)
}

// Lo utilizaremos para actualizar usuarios eliminar
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: 'Usuario eliminado' })
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
}
