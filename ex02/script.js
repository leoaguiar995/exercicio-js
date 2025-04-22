document.getElementById('btn').addEventListener('click', verificar)

function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro = Ano invalido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', './imgs/bebeH.png')
                //bebe
            }else if(idade <15){
                img.setAttribute('src', './imgs/criancaH.png')
                //jovem
            }else if(idade < 25){
                img.setAttribute('src', './imgs/jovemH.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', './imgs/adultoH.png')
                //adulto
            }else {
                img.setAttribute('src', './imgs/idosoH.png')
                //idoso
            }
        }else{
            genero = 'Feminino'
            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', './imgs/bebeM.png')
                //bebe
            }else if(idade <15){
                img.setAttribute('src', './imgs/criancaM.png')
                //jovem
            }else if(idade < 25){
                img.setAttribute('src', './imgs/jovemM.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', './imgs/adultoM.png')
                //adulto
            }else {
                img.setAttribute('src', './imgs/idosoM.png')
                //idoso
            }
        }
        res.innerHTML = ` Detectamos sexo ${genero} com idade ${idade} anos. <br>`
        res.appendChild(img)
    }
}