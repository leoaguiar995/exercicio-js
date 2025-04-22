document.getElementById('btn').addEventListener('click', verificar)



function calcularIdade(dataNascimento){
    const hoje = new Date()
    let idade = hoje.getFullYear() - dataNascimento.getFullYear()
    const mes = hoje.getMonth() - dataNascimento.getMonth()

    if(mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())){
        idade--
    }
    return idade


}
function verificar(){

    var fdata = document.getElementById('txtdata')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(!fdata.value){
        window.alert('Erro = Data Invalida')
        return
    }else{

        const dataNascimento = new Date(fdata.value)
        const idade = calcularIdade(dataNascimento)
        var fsex = document.getElementsByName('radsex')
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