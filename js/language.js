// Fonction pour gérer la redirection en fonction de la langue
function redirectToLanguage() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        const currentPath = window.location.pathname;
        let targetPath = '';

        if (selectedLanguage === 'fr' && currentPath !== '/index.html') {
            targetPath = '/index.html';
        } else if (selectedLanguage === 'de' && currentPath !== '/de/index.html') {
            targetPath = '/de/index.html';
        }

        if (targetPath) {
            const currentHostname = window.location.hostname;
            const newPath = `${currentHostname}/pklaw${targetPath}`;
            window.location.href = newPath; // Rediriger vers la page dans la langue sélectionnée
        }
    }
}

// Sélectionnez les liens de langue
const languageLinks = document.querySelectorAll('.language-link');

// Ajoutez un gestionnaire d'événement de clic à chaque lien
languageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedLang = this.getAttribute('data-lang');
        localStorage.setItem('selectedLanguage', selectedLang);
        redirectToLanguage(); // Rediriger après avoir défini la langue
    });
});

// Redirigez initialement en fonction de la langue stockée
redirectToLanguage();
