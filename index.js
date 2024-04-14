const usuario = "admin"
const password = "admin"

function login(){
    var login = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    if(login == usuario && senha == password) {
        window.location.href="/home/index.html"
        window.alert("Login realizado com sucesso")

    }
    else{
        window.alert("Usuário ou senha incorreta")
    }
}
