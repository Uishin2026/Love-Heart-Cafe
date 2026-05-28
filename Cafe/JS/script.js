// メニュー内のリンクをクリックしたらチェックボックスをオフにする
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-btn-check').checked = false;
    });
});