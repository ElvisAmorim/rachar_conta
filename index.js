/* funcao para fixar duas casas decimais */

function formatVl(value){
    value = value.toFixed(2)
    return 'R$ ' + value.replace('.',',')
}


function update(){

    /* variaveis associadas ao html */
    let conta = Number(document.getElementById('vlConta').value)
    let perc = document.getElementById('percInput').value
    let div = document.getElementById('divInput').value
  
    /* Operacoes matematicas */
    let gorjVlr = conta * (perc / 100)
    let contaTotal = conta + gorjVlr
    let contaDiv = contaTotal / div
 
    /* % da gorjeta */
    document.getElementById('tipPercent').innerHTML = perc + ' %'
  
    /* Valor da gorjeta */
    document.getElementById('gorjVl').innerHTML = formatVl(gorjVlr)

    /* Valor da conta mais valor da gorjeta */
    document.getElementById('totalComGorj').innerHTML = formatVl(contaTotal)

    /* Quantas divisoes */
    document.getElementById('divGorj').innerHTML = div

    /* Valor por pessoa */
    document.getElementById('divPessoa').innerHTML = formatVl(contaDiv)
    
}
