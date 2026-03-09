function enviar(){
    const nome = document.getElementById("nome").value
    const assunto = document.getElementById("msg").value

    if (!nome || !assunto) {
        document.getElementById("nome").style.border = "3px solid red"
        document.getElementById("msg").style.border = "3px solid red"
        return
    }

    const mensagem = `Gostaria de entrar em contato!\nNome: ${nome}\nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5541988973694?text=${msg}`, '_blank')
}