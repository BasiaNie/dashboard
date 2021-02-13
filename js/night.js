let body = document.body;
let toggleBtn = document.querySelector('.theme-button');
let currentTheme = localStorage.getItem('currentTheme');

if(currentTheme) {
    body.classList.add('theme-night');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('theme-night');


if(body.classList.contains('theme-night')) {
    localStorage.setItem('currentTheme', 'themeActive');
    }else {
        localStorage.removeItem('currentTheme');
    } 
})