// resolve the promise after delay 
const resolvedPromise = (delay) =>
    // create promise object
    new Promise(resolve => setTimeout(resolve, delay))

// reject the promise after delay 
const rejectedPromise = (delay) =>
    new Promise(reject => setTimeout(reject, delay))

// resolve the promise after 500ms 
resolvedPromise(500).then(() => {
    let success = { 'message': 'delayed success!' }
    console.log(success) // print resolved promise message
})

// reject the promise after 500ms
rejectedPromise(500).then(() => {
    try {
        throw new Error('{ error: \'delayed exception!\' }')
    } catch (e) {
        // print rejected message in the console
        console.error(e.message)
    }
})


