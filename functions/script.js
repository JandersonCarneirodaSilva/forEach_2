let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")


b1.addEventListener('click', f1)

b2.addEventListener('click', (e) => {
    document.getElementById("demo").innerHTML = f2();
})


function f1() {
    alert("Hello World!");
}

function f2() {
    return 'hello';
}
