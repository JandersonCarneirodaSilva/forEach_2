let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')

const person = {
    firstName: 'John',
    lastName: 'Doe',
    country: 'Norway',
    age: 50
}

b1.addEventListener('click', () => {
    alert(person.firstName)
})

b2.addEventListener('click', () => {
    alert(person.firstName + " is " + person.age)
})