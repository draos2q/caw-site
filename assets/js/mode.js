toogleTheme(localStorage.getItem('color-theme') || 'light');

const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage)))
    themeToggleLightIcon?.classList.remove('hidden');
else
    themeToggleDarkIcon?.classList.remove('hidden');

themeToggleBtn?.addEventListener('click', function () {
    themeToggleDarkIcon?.classList.toggle('hidden');
    themeToggleLightIcon?.classList.toggle('hidden');
    toogleTheme(localStorage.getItem('color-theme') === 'dark' ? 'light' : 'dark');
});

function toogleTheme(newTheme) {

    if (!document.documentElement.classList.contains(newTheme))
        document.documentElement.classList.add(newTheme);

    localStorage.setItem('color-theme', newTheme);

    if (newTheme === 'dark') {
        document.documentElement.classList.remove('light');
    }

    if (newTheme === 'light') {
        document.documentElement.classList.remove('dark');
    }
}