document.addEventListener("DOMContentLoaded",function(){
    let storage = localStorage.getItem("dados") 
    let dados = storage ? JSON.parse(storage) : []

    let corpotabela = document.getElementById('corpo-tabela') 

    console.log(dados)

    for (var i = 0; dados.length > i; i++ ) {
        var funcionario = JSON.parse(dados[i])
        console.log(funcionario)

        var novalinha = corpotabela.insertRow()
        
        var celulaIndice = novalinha.insertCell()
        celulaIndice.textContent = funcionario.nome


        var celulaItem = novalinha.insertCell()

        celulaItem.textContent = funcionario.idade

        var ButtonEditar = document.createElement("button") 
        ButtonEditar.innerHTML = "editar"

        var ButtonExcluir = document.createElement("button") 
        ButtonExcluir.innerHTML = "excluir"
        ButtonExcluir.onclick = function(){
            console.log("iniciouExcluir")
            let storage = localStorage.getItem("dados")
            let dados = storage ? JSON.parse(storage) : []
        
            console.log(dados)
            var novosDados = dados.filter(empregado => JSON.parse(empregado).login !== funcionario.login)
            console.log(novosDados)
            localStorage.setItem("dados",JSON.stringify(novosDados))
            window.alert("funcionario de login " + funcionario.login + " Excluído com sucesso!")
            window.location.reload()
        }
          
        var celulaEditarExcluir = novalinha.insertCell()

        celulaEditarExcluir.appendChild(ButtonEditar)

        celulaEditarExcluir.appendChild(ButtonExcluir)



    }
})

function cadastrar(){
    window.location.href= "/paginas/cadastros/funcionario/funcionario.html"
}


