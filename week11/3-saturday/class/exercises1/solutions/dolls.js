let dolls = require('./russianDoll')

do {
    console.log(dolls.value)
    dolls = dolls.child
} while(dolls.child) 