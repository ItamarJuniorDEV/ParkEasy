function cadastrar(){
    let storage = localStorage.getItem("dados")
    let dados = storage ? JSON.parse(storage) : []

    var login = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    var nome = document.getElementById("name").value
    var idade = document.getElementById("age").value

    const funcionario = JSON.stringify({login,senha,nome,idade})
    dados.push(funcionario)
    localStorage.setItem("dados",JSON.stringify(dados))
}



