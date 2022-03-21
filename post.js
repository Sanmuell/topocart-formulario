function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrar() {
    event.preventDefault()
    let url = "/novo.json"

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let numero = document.getElementById("numero").value
    let selecao = document.getElementById("selecao").value
    
    console.log(email)
    console.log(senha)
    console.log(numero)
    console.log(selecao)

    body = {
        "email": email,
        "senha": senha,
        "numero": numero,
        "text": selecao
        
    }

    fazPost(url, body)
}