function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var for_ano = document.getElementById('inasc')
    var res = document.getElementById('res')
    if (for_ano.value.length == 0 || for_ano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var for_sex = document.getElementsByName('sexo')
        var idade = ano - Number(for_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (for_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src' , 'homemcriança.png')
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade > 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        } else if (for_sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulhercriança.png')
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade > 21 && idade < 50) {
                // Adulta
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}