let bt = document.getElementById("test")
let input = document.getElementById("input")

const ages = [32, 33, 16, 40]

bt.addEventListener('click', () => {
    f2()
})

function f1(age) {
    return age > input.value
}

function f2() {
    document.getElementById("demo").innerHTML = ages.filter(f1)
}
