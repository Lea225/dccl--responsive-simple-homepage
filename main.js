document.addEventListener('DOMContentLoaded', () => {
    const toggleIcons = document.querySelectorAll(".toggle-icon");
    const body = document.body;
    const logo = document.getElementById("logo");

    // Vérifie si un thème est déjà sélectionné et l'applique
    const currentTheme = localStorage.getItem('theme') || 'light-mode'; // Défaut au thème clair
    body.classList.add(currentTheme);

    // Met à jour le logo en fonction du thème
    if (currentTheme === 'dark-mode') {
        toggleIcons.forEach(icon => icon.classList.add('active'));
        logo.src = "images/alarado-icon-homepage-dark.svg"; // Logo pour le thème sombre
        logo.style.opacity = 1; // Assurez-vous que le logo sombre est visible
    } else {
        logo.src = "images/alarado-icon-homepage.svg"; // Logo pour le thème clair
        logo.style.opacity = 1; // Assurez-vous que le logo clair est visible
    }

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Bascule entre les classes light-mode et dark-mode
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                toggleIcons.forEach(icon => icon.classList.add('active'));
                logo.style.opacity = 0; // Cache le logo clair
                setTimeout(() => {
                    logo.src = "images/alarado-icon-homepage-dark.svg"; // Logo pour le thème sombre
                    logo.style.opacity = 1; // Affiche le logo sombre
                }, 300); // Délai pour permettre à l'animation d'opacité de se produire
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                toggleIcons.forEach(icon => icon.classList.remove('active'));
                logo.style.opacity = 0; // Cache le logo sombre
                setTimeout(() => {
                    logo.src = "images/alarado-icon-homepage.svg"; // Logo pour le thème clair
                    logo.style.opacity = 1; // Affiche le logo clair
                }, 300); // Délai pour permettre à l'animation d'opacité de se produire
                localStorage.setItem('theme', 'light-mode');
            }
        });
    });

    const hamburgerIcon = document.querySelector(".icon-hamburger");
    const closeIcon = document.querySelector(".icon-close");
    const overlay = document.querySelector(".overlay");
    const navigation = document.querySelector(".navigation");

    hamburgerIcon.addEventListener("click", function () {
        navigation.classList.add("active");
        overlay.classList.add("active");
    });

    closeIcon.addEventListener("click", function () {
        navigation.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
        navigation.classList.remove("active");
        overlay.classList.remove("active");
    });
});
