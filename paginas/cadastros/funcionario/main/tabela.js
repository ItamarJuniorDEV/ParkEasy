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


    }
})

