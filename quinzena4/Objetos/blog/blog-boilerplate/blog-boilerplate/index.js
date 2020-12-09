function valores () {
       
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")

    const tituloValue = titulo.value
    const autorValue = autor.value
    const conteudoValue = conteudo.value
    
    let objetos = []
    let blog = []
    
}

function adicionarFormulario () {
        const blog = {
            titulo = tituloValue,
            autor = autorValue,
            conteudo = conteudoValue
        }

        objetos = [{
        ...blog
        }]

    blog = objetos.push(tituloValue)
    blog = objetos.push(autorValue)
    blog = objetos.push(conteudoValue)

    }

titulo.innerHTML = ""
autor.innerHTML = ""
conteudo.innerHTML = ""

valores()
adicionarFormulario()
console.log(blog)