async function fetchNav(id) {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const logoLi = document.createElement('li');
    const logoSpan = document.createElement('span');
    logoSpan.className = 'logo';
    logoSpan.textContent = 'book .';
    logoLi.appendChild(logoSpan);
    ul.appendChild(logoLi);

    const homeLi = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = './#home';
    homeLink.textContent = 'home';
    homeLi.appendChild(homeLink);
    ul.appendChild(homeLi);

    const storeLi = document.createElement('li');
    const storeLink = document.createElement('a');
    storeLink.href = './#store';
    storeLink.textContent = 'store';
    storeLi.appendChild(storeLink);
    ul.appendChild(storeLi);

    const contactLi = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.href = './#contact';
    contactLink.textContent = 'contact';
    contactLi.appendChild(contactLink);
    ul.appendChild(contactLi);

    const loginLi = document.createElement('li');
    loginLi.className = 'login-btn';
    if (localStorage.getItem("auth") !== 'true') {
        const loginLink = document.createElement('a');
        loginLink.href = 'login.html';
        loginLink.textContent = 'login';
        loginLi.appendChild(loginLink);
    } else {
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = 'logout';
        logoutLink.onclick = logout;
        loginLi.appendChild(logoutLink);
        loginLi.classList.add('red');
    }
    ul.appendChild(loginLi);

    nav.appendChild(ul);

    document.getElementById(id).appendChild(nav);
}