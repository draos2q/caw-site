
const dropdownLang = document.getElementById('dropdown-lang');
const lang = localStorage.getItem('lang') || 'en';

loadTranlation(lang);

function loadTranlation(lang) {

    const file = `./assets/lang/manifesto.${lang}.txt`;

    fetch(file)
        .then(response => response.text())
        .then(text => {
            const el = document.getElementById('content-manifesto');
            if (el)
                el.innerText = text;
        });
}

function setLang(lang) {
    localStorage.setItem('lang', lang);
    loadTranlation(lang);
}

dropdownLang.addEventListener('click', function (e) {
    setLang(e?.target?.hreflang || 'en');
});
