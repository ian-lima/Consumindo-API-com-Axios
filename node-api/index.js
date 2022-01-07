// BACK END da API
const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())


//  Primeiro usuário criado na API
let users = [{
  id: 1,
  name: "Chaves",
  avatar: "https://t.ctcdn.com.br/kVvX_IzHzSbLaNl2dUotPp9YUQ0=/i289517.jpeg",
  city: "Cidade do México"
}]

// Rota do tipo GET e ela responde com os usuários
app.route('/api').get((req, res) => res.json({
  users
}))

// Rota do tipo GET, porém quando há um ID, ele busca o usuário correspondente do ID e retorna no res.json(user)
app.route('/api/:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})

// Todo usuário novo que entra, ele cria um ID, verifica o último ID e acrescenta mais um
app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1, // acrescenta mais um ID
    name: req.body.name, // Preenche com o que recebe da API
    avatar: req.body.avatar, // Preenche com o que recebe da API
    city: req.body.city // Preenche com o que recebe da API
  })
  res.json('Saved user')
})

// Ele recebe o ID pela URL, faz um find para descobrir quem é o usuário e atualiza as informações desse usuário de acordo com o que é mandado
app.route('/api/:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})

// Ele recebe o ID do usuário que vai ser apagado do ponto delete, faz um filter no array, removendo o usuário desse ID que foi passado na URL
app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})