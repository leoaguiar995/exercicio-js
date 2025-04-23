btncount = document.getElementById('btncount')
btncount.addEventListener('click', contar)

function contar(){
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)

    let txt = document.getElementById('contagem')

    let resultado = ''

    if(passo <=0){
        alert('passo invalido')
        passo = 1;
    }

    if(inicio < fim){

        for(let i = inicio; i <= fim; i += passo)
            resultado += ` ${i} `

    }else{
        
        for(let i = inicio; i >= fim; i -= passo)
            resultado += ` ${i} `
    }

    txt.innerHTML = resultado;
}

