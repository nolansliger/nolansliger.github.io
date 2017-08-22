function equalizeDivs() {
    let about = document.getElementById('about');
    let contact = document.getElementById('contact');

    contact.style.height = ((about.offsetHeight > contact.offsetHeight) ? about.offsetHeight : contact.offsetHeight) + 'px';
    about.style.height = ((contact.offsetHeight > about.offsetHeight) ? contact.offsetHeight : about.offsetHeight) + 'px';
}

window.onload = function() {
    window.addEventListener('resize', equalizeDivs());
    equalizeDivs();
} 