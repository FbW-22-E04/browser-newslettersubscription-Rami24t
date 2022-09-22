document.body.addEventListener('click', e => {
    if (e.target.classList.contains('close-button')) {
        e.target.parentElement.style.opacity = 0;
        setTimeout(() => e.target.parentElement.style.display = 'none', 500);
    }
})
window.addEventListener('mousemove', e => {
    document.querySelector('main').innerText = '';
    document.querySelector('main').append("pageX: ", e.pageX,
        "pageY: ", e.pageY,
        "clientX: ", e.clientX,
        "clientY:", e.clientY, window.innerHeight, window.innerWidth, '\n',
        (e.clientX / window.innerWidth).toFixed(2), '\n', (e.clientY / window.innerHeight).toFixed(2));

    if (e.clientX / window.innerWidth > 0.20 && e.clientY / window.innerHeight > 0.27 && e.clientX / window.innerWidth < 0.84 && e.clientY / window.innerHeight < 0.7)
        document.querySelector('.popup').style = 'display: block; opacity:1;';
})
