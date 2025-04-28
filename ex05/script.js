let number = document.getElementById('number')
let add = document.getElementById('add')
let vetor = document.getElementById('showarray')
let finalizar = document.getElementById('finalizar')

let textoresul = document.getElementById('texto')

let numeros=[]

function addarray(){
    let num = Number(number.value)

    if (num >= 1 && num<=100){
        if(numeros.includes(num)){
            alert('numero ja adicionado')
        }else{
            numeros.push(num)
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            vetor.appendChild(item)
        }

    } else {
        alert('numero invalido = digite um numero entre 1 e 100')
    }

    number.value=''
    number.focus()
}


add.addEventListener('click', addarray)

function resultado(){
    let soma = 0
    for (let num of numeros){
        soma += num
    }

    let media = soma / numeros.length

    textoresul.innerHTML=''
    textoresul.innerHTML= `Total de numeros: ${numeros.length} <br> 
    O maior Numero é: ${Math.max(...numeros)} <br>
    O menor número é: ${Math.min(...numeros)} <br>
    A soma dos numeros é ${soma} <br>
    A media dos numeros é ${media}`

    
}


finalizar.addEventListener('click', resultado)
//total de numeros no vetor
// maior numero
// menor numero
//soma dos numeros
// media dos numeros