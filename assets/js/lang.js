
const dropdownLang = document.getElementById('dropdown-lang');
const lang = localStorage.getItem('lang') || 'en';

loadTranlation(lang);

async function loadTranlation(lang, desc) {

    lang = (lang || 'en').toLowerCase();
    const file = `./assets/lang/manifesto.${lang}.txt`;
    await loadLabels(lang);

    fetch(file)
        .then(response => response.text())
        .then(text => {
            const el = document.getElementById('content-manifesto');
            if (el)
                el.innerText = text;

            const elLang = document.querySelector(`a[hreflang="${lang}"]`);
            const bnt = document.getElementById('dropdownDefault');
            if (bnt) {
                bnt.innerText = (desc || elLang?.innerText || '').trim();
                bnt.innerText = bnt.innerText.replace(/(\r\n|\n|\r)/gm, " ");
            }
        });
}

async function loadLabels(lang) {
    try {

        if (!lang)
            lang = localStorage.getItem('lang') || 'en';

        lang = lang.toLowerCase();
        const resp = await fetch(`./assets/lang/i18n.${lang}.json`);
        const i18n = await resp.json();

        const elTitle = document.getElementById('caw-title-manifesto');
        if (elTitle)
            elTitle.innerText = i18n[ 'title' ] || elTitle.innerText || '';

        const elDesc = document.getElementById('caw-desc-manifesto');
        if (elDesc)
            elDesc.innerText = i18n[ 'description' ] || elDesc.innerText || '';

        const elSubTitle = document.getElementById('caw-subtitle-manifesto');
        if (elSubTitle)
            elSubTitle.innerText = i18n[ 'manifesto_subtitle' ] || elSubTitle.innerText || '';

        const tooltipModeEl = document.getElementById('tooltip-theme-mode');
        if (tooltipModeEl)
            tooltipModeEl.innerText = i18n[ 'tooltip-theme-mode' ] || tooltipModeEl.innerText || '';

        const tooltipArmyEl = document.getElementById('tooltip-army');
        if (tooltipArmyEl)
            tooltipArmyEl.innerText = i18n[ 'tooltip-army' ] || tooltipArmyEl.innerText || '';

        const joinArmyLink = document.getElementById('join-army-link');
        if (joinArmyLink)
            joinArmyLink.innerText = i18n[ 'join-army-link' ] || joinArmyLink.innerText || '';

        const joinArmyFooterLink = document.getElementById('join-army-footer-link');
        if (joinArmyFooterLink)
            joinArmyFooterLink.innerText = i18n[ 'join-army-footer-link' ] || joinArmyFooterLink.innerText || '';
    }
    catch (error) {
        console.error(error);
    }
}

function setLang(lang) {
    localStorage.setItem('lang', lang);
    loadTranlation(lang);
}

dropdownLang.addEventListener('click', function (e) {
    setLang(e?.target?.hreflang || 'en', e?.target?.innerText);
});
