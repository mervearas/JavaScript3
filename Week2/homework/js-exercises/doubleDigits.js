'use strict'

function checkDoubleDigits(number){
    return new Promise((resolve, reject) => {
        if(!number || typeof number !== "number"){
            reject(new Error("Error! You did not pass a number!"));
        }
        else if(number > 10){
            resolve("The number is bigger than 10!")
        } else {
            reject(new Error("Error! The number is smaller than 10..."))
        }
    })
}

checkDoubleDigits(1)
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})