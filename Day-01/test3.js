//synchronous programming blocks the thread;
setTimeout(() => {
    console.log("i am timeout")
}, 5000)
console.log("I am outside timeout")