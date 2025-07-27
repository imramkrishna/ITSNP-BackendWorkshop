function delay(message, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, time)
    })
}

delay("Step 1", 1000)
    .then(() => delay("Step 2", 1000))
    .then(() => delay("Step 3", 1000))
    .then(() => delay("Step 4", 1000))
    .then(() => {
        console.log("All steps completed!");
    })
    .catch((error) => {
        console.log("Error occurred:", error);
    });