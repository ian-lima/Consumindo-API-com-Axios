const url="http://localhost:5500/api"
const newUser = {
    name: "Chiquinha",
    avatar: "http://forumchaves.com.br/site/wp-content/uploads/2013/01/chiquinha.jpg",
    city: "Santiago Ixcuintla"
}
const userUpdated = {
    name: "Godinez",
    avatar: "https://apresentadorfantastico.com.br/wp-content/uploads/2019/02/godinez_1280px-625x352.jpg",
    city: "Cidade do México"
}

function getUser() {
  axios.get(url) // pegar coisas da API, se usa o método GET
    .then(response => {
      const data = response.data
      renderResults.textContent = JSON.stringify(data) // JSON pega o objeto que está passando -data- e transforma em texto puro
    })
    .catch(error => console.log(error))
}
//getUser() // pegar um usuário

function addNewUser() {
    axios.post(url, newUser) // enviar coisas para API, se usa o método POST
    .then(response => {
    //    console.log(response.data) // no response vem um objeto e dentro da chave "data" é onde vem a resposta da API
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//addNewUser() // adicionar um usuário

function updateUser() {
  axios.put(`${url}/3`, userUpdated) // mandar coisas para API para fazer o update, se usa o método PUT
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//updateUser() // atualizar um usuário

function deleteUser() {
    axios.delete(`${url}/5`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//deleteUser() // deletar um usuário

function getOneUser() {
    axios.get(`${url}/1`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
//getOneUser() // pegar somente UM usuário específico