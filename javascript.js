function generateNumber() {

    const min = Math.ceil(document.querySelector(".custom-input-min").value)
    const max = Math.floor(document.querySelector(".custom-input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    document.getElementById("result").innerHTML = "Resultado: " + result;

}

function startCountdown() {
    let countdown = 5;
    const countdownElement = document.getElementById("countdown");

    document.getElementById("result").innerHTML = ""

    const countdownInterval = setInterval(() => {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = ""
            generateNumber();
        }
    }, 1000);
}


