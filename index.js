document.body.addEventListener('click', e => {
    if (e.target.classList.contains('close-button')) {
        e.target.parentElement.style.opacity = 0;
        setTimeout(() => e.target.parentElement.style.display = 'none', 500);
    }
})
window.addEventListener('mousemove', e => {
    document.querySelector('main').innerText = '';
    document.querySelector('main').innerText += ("pageX: " + e.pageX +
        "pageY: " + e.pageY +
        "clientX: " + e.clientX +
        "clientY:" + e.clientY + window.innerHeight + window.innerWidth + '\n' +
        (e.clientX / window.innerWidth).toFixed(2) + '\n' + (e.clientY / window.innerHeight).toFixed(2));
    if (e.clientY < 10)
        document.querySelector('.popup').style = 'display: block; opacity:1;';
})

document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())