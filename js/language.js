// Fonction pour gérer la redirection en fonction de la langue
function redirectToLanguage() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        const currentPath = window.location.pathname;
        let targetPath = '';

        if (selectedLanguage === 'fr' && currentPath !== '/pklaw/index.html') {
            targetPath = '/pklaw/index.html';
        } else if (selectedLanguage === 'de' && currentPath !== '/pklaw/de/index.html') {
            targetPath = '/pklaw/de/index.html';
        }

        if (targetPath) {
            window.location.href = targetPath; // Rediriger vers la page dans la langue sélectionnée
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
