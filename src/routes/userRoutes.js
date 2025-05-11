
const express = require('express')
const router = express.Router()
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  showForm,
  listUsers
} = require('../controllers/userController')

router.post('/', createUser)
router.get('/', getUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

router.get('/formulario', showForm)
router.post('/formulario', createUser) 
router.get('/usuarios', listUsers)

module.exports = router
