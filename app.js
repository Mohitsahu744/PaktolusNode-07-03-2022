
//=======================Import module=================================

// const add = require('./utils')

// const sum = add(4, -2)

// console.log(sum)


// =====================Validator===================================


// const validator = require('validator')
// const getNotes = require('./notes.js')

// // const msg = getNotes()
// // console.log(msg) 

// console.log(validator.isEmail('andrew@example.com')) //True
// // console.log(validator.isEmail('example.com')) //false

// // console.log(validator.isURL('https://mead.io')) //True


//====================Chalk library==================================

const chalk = require ('chalk')
const greenMsg = chalk.green('Success')
console.log(greenMsg)