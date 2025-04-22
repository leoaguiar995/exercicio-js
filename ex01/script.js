window.addEventListener('load', carregar)

function carregar(){
    var message = document.getElementById('message')
    var image = document.getElementById('image')

    var data = new Date()
    var hora = data.getHours().toString()
    var minutos = data.getMinutes().toString().padStart(2, '0')
    //var hora = 2

    message.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if(hora >= 0 && hora < 12){
        image.src = './imgs/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        image.src = './imgs/fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        image.src = './imgs/fotonoite.png'
        document.body.style.background = '#515154'
    }
}