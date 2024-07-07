function carregar() {
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var hora_atual = window.document.getElementById('hora')
var cor_fundo = window.document.getElementById('fundo')
    hora_atual.innerText = `Agora são ${hora} Horas e ${minutos} minutos.`

    if (hora >= 5 && hora < 12) {
        dia.style.display = 'block'
        cor_fundo.style.backgroundColor ='#e2cd9f' 

    } else if (hora >= 12 && hora < 18) {
        tarde.style.display = 'block'
        cor_fundo.style.backgroundColor = '#b9846f'
    } else {
        noite.style.display = 'block'
        cor_fundo.style.backgroundColor = '#515154'

    }
}    