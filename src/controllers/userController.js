const User = require('../models/User')

const createUser = async (req, res) => {
  await User.create(req.body)

  if (req.headers.accept?.includes('text/html')) {
    const users = await User.find()
    res.render('usuarios', { users })
  } else {
    const users = await User.find()
    res.status(201).json(users)
  }
}

const getUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(user)
}

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: 'Usuario eliminado' })
}

const showForm = (req, res) => {
  res.render('formulario')
}

const listUsers = async (req, res) => {
  const users = await User.find()
  res.render('usuarios', { users })
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  showForm,
  listUsers,
}
