let bt = document.getElementById("test")
let input = document.getElementById("input")

const numbers = [175, 50, 25]

bt.addEventListener('click', () => {
    document.getElementById('demo').innerHTML = numbers.reduce(f1)
})

function f1(total, num) {
    return total - num
}