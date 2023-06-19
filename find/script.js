let bt = document.getElementById("test")
let input = document.getElementById("input")

const ages = [3, 10, 19, 20]

bt.addEventListener('click', () => {
    f2()
})

function f1(age) {
    return age > 18
}

function f2() {
    document.getElementById("demo").innerHTML = ages.find(f1)
}
