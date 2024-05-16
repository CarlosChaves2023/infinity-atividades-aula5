//Atividade 01
var numeros = []
var pares = []
var impares = []

for (var i = 1; i <= 10; i++) {
    var valores = prompt(`Digite um número qualquer:`)
    numeros.push(valores)
    if (valores % 2 == 0){
        pares.push(valores)
    } else {
        impares.push(valores)
    }
}
console.log(numeros)
console.log(pares)
console.log(impares)

//Ativiade 02
var inteiros = []
while(true){
    var contador = 0
    var numeros = prompt(`Digite um número inteiro`)
    
    if(numeros < 0){
        numeros = numeros * (-1)
        if (numeros % 2 == 1 || numeros % 2 == 0){
            numeros = numeros * (-1)
            inteiros.push(numeros)
        } 

    } else if (numeros == ''){
        alert(`Você não digitou nenhum número. Digite um número inteiro.`)

    } else {
        if (numeros % 2 == 1 || numeros % 2 == 0){
            inteiros.push(numeros)
        } else {
            alert(`O números digitado não é um número inteiro.`)
        }

    } 

    contador++
    if (inteiros.length == 5){
        break
    }
}
console.log(inteiros)

//Atividade 03
var sim = []

var investigação = alert(`Estamos investigando um crime e vamos lhe fazer algumas perguntas. Responda apenas sim ou não.`)
var pergunta1 = prompt(`Telefonou para a vítima?`).toLowerCase().trim()
if(pergunta1 == 'sim'){
    sim.push(pergunta1)
}
var pergunta2 = prompt(`Esteve no local do crime?`).toLowerCase().trim()
if(pergunta2 == 'sim'){
    sim.push(pergunta2)
}
var pergunta3 = prompt(`Mora perto da vítima?`).toLowerCase().trim()
if(pergunta3 == 'sim'){
    sim.push(pergunta3)
}
var pergunta4 = prompt(`Devia para a vítima?`).toLowerCase().trim()
if(pergunta4 == 'sim'){
    sim.push(pergunta4)
}
var pergunta5 = prompt(`Já trabalhou com a vítima?`).toLowerCase().trim()
if(pergunta5 == 'sim'){
    sim.push(pergunta5)
}

if (sim.length < 2){
    alert(`Você é INOCENTE no caso do assassinato.`)
} else if(sim.length == 2){
    alert(`Você é SUSPEITO do caso do assassinato.`)
} else if (sim.length <= 4){
    alert(`Você é CÚMPLICE no caso do assassinato`)
} else {
    alert(`Você é CULPADO no caso do assassinato`)
}


//Atividade 04
var numeros = []
while(true){
    var valor = prompt(`Digite um número real:`)
    numeros.push(valor)
    for(n of numeros){
        if(n < 0){
        n = n * -1
        if (n % 2 == 0 || n % 2 == 1){
            numeros.pop(n)
        } else {
            n = n * -1
            
        }
    } else if(n > 0){
        if (n % 2 == 0 || n % 2 == 1){
            numeros.pop(n)
        
        }
    }
}
if(numeros.length == 10){
    break
}

}


console.log(numeros.reverse())

//Atividade 05
var notas = Array()
var soma = 0
var media = 0
for(var i  = 1; i <= 4; i++){
    var nota = Number(prompt(`Digite a ${i}ª nota:`))
    notas.push(nota)
    soma += nota
    media = soma / 4
}

console.log(`Média`, media)
console.log(`Notas:`, notas)