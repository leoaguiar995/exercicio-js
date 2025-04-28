let btnmult = document.getElementById('gerar')
let tab = document.getElementById('seltab')

btnmult.addEventListener('click', multiplicar)


function multiplicar(){
    let num = Number(document.getElementById('number').value)
    tab.innerHTML= ''
    for(let i = 1; i <= 10; i++){
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${num*i}`
        tab.appendChild(item)
    }
}


