let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let sum = 0


const numbers = [65, 44, 12, 4]
document.getElementById("demo").innerHTML = `numeros: ${numbers}`;


b1.addEventListener('click', () => { // utilizando forEach
    sum = 0
    numbers.forEach(f1)
    alert(`soma dos numeros: ${sum}`)
})

b2.addEventListener('click', () => { // utilizando map
    let n2 = numbers.map(f2)
    alert(`itens da lista multiplicados por 10: ${n2}`)
})

function f1(item) {
    sum += item
}

function f2(item) {
    return item * 10
}
