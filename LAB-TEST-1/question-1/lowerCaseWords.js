// return a promise that is resolved or rejected
// filter the non-strings and lower case the remaining words

const mixedArray = ['PIZZA', 10, true, 25, false, "wings"]

let lowerCaseWords = (ary) => {
    // promise that will be resolved when all words are  filtered and lowercase
    let pr = new Promise((resolve, reject) => {
        //filtering array and mapping to lower case
        let result = ary.filter(e => typeof e === 'string' && e !== '').map(word => word.toLowerCase())
        // checking array
        if (result !== undefined && result.length !== 0) {
            //if passed everything - resolve
            resolve(result)

        } else reject("ERROR")

    })
    return pr
}


lowerCaseWords(mixedArray).then((success) => { // when the promise is resolved return the result.
    return JSON.stringify(success)
}).then((response) => { // runs when the promise is rejected and receives the error
    console.log(response)
}).catch((error) => {
    console.log(error)
})
