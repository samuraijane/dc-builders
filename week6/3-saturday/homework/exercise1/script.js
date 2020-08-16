
const buttClicked = document.getElementById("launch-rock");
const div = document.getElementById("button-event");

buttClicked.addEventListener("click", function(e) {
    console.log(e);

    const safetyChecks = document.createElement("div");
    div.appendChild(safetyChecks);
    safetyChecks.innerHTML = "Checking that the fuel is primed..."

    new Promise((res, rej) => {
        setTimeout(() => {
            res();
            safetyChecks.innerHTML = "Checking that the engines are stabilized..."
            console.log(safetyChecks.innerHTML);
        }, 3000);
    }).then(() => {
        return new Promise((res,rej) => {
            setTimeout(() => {
                res();
                safetyChecks.innerHTML = "Checking that the exhaust system fans are running..."
                console.log(safetyChecks.innerHTML);
            }, 2000); 
        })
    }).then(() => {
        return new Promise((res,rej) => {
            setTimeout(() => {
                res();
                safetyChecks.innerHTML = "Checking that doors are secured..."
                console.log(safetyChecks.innerHTML);
            }, 2500); 
        })
    }).then(() => {
        return new Promise((res,rej) => {
            setTimeout(() => {
                res();
                safetyChecks.innerHTML = "Checking that electronic systems are online..."
                console.log(safetyChecks.innerHTML);
            }, 1500); 
        })
    }).then(() => {
        return new Promise((res,rej) => {
            setTimeout(() => {
                res();
                safetyChecks.innerHTML = "All checks have passed. Countdown may begin."
                console.log(safetyChecks.innerHTML);
            }, 4000); 
        })
    })
    })
