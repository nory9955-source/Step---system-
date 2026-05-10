function showNotification(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function autoChat(text) {
    const chat = document.getElementById('chatDisplay');
    chat.innerHTML += `<div class="msg user">${text}</div>`;
    setTimeout(() => {
        chat.innerHTML += `<div class="msg ai">جاري التحقق من حالة المعاملة... ✅</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}
