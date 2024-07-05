var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var hora_atual = window.document.getElementById('hora')
var cor_fundo = window.document.getElementById('fundo')
var dia = window.document.getElementById('dia')
var tarde = window.document.getElementById('tarde')
var noite = window.document.getElementById('noite')
    hora_atual.innerText = `Agora são ${hora} Horas e ${minutos} minutos.`

    if (hora >= 5 && hora < 12) {
        dia.style.display = 'block'
        cor_fundo.style.backgroundColor ='rgb(235, 198, 154)' 

    } else if (hora >= 12 && hora < 18) {
        tarde.style.display = 'block'
        cor_fundo.style.backgroundColor = 'lightsalmon'
    } else {
        noite.style.display = 'block'
        cor_fundo.style.backgroundColor = 'rgba(0, 0, 0, 0.721'

    }