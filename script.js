function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`

        if (min < 10){
            min = '0' + min
        }
    
        if (hora == 1){
            msg.innerHTML = `Agora são ${hora}:${min} Hora da manhã.`
            document.body.style.backgroundColor = '#ad8978'
        } else if (hora >= 0 && hora < 12){
            //bom dia
            msg.innerHTML = `Agora são ${hora}:${min} Horas da manhã.`
            img.src = 'imagens/manha.png'
            document.body.style.backgroundColor = '#ad8978'
        } else if (hora >= 12 && hora < 18){
            //boa tarde
            msg.innerHTML = `Agora são ${hora}:${min} Horas da tarde.`
            img.src = 'imagens/tarde.png'
            document.body.style.backgroundColor = '#ed9748'
        }  else if (hora > 18){
            //boa noite
            msg.innerHTML = `Agora são ${hora}:${min} Horas da noite.`
            img.src = 'imagens/noite.png'
            document.body.style.backgroundColor = '#4d3553'
        }
         
}