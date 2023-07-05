function navFunction () {
    var mainNav = document.getElementById('top-nav');
    if (mainNav.className === 'nav-links') {
        mainNav.className += " responsive";
    } else {
        mainNav.className = 'nav-links';
    }
}