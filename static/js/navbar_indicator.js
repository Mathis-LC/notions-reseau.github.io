document.addEventListener("DOMContentLoaded", () => {
    // Nom du fichier de la page actuelle
    let currentPage = window.location.pathname.split("/").pop();

    // Si l'URL se termine par /, on considère index.html
    if (currentPage === "") {
        currentPage = "index.html";
    }

    // Parcourt les liens de la navbar
    document.querySelectorAll(".navbar-start .navbar-item[href]").forEach(link => {
        const linkUrl = new URL(link.href, window.location.href);
        const linkPage = linkUrl.pathname.split("/").pop();

        if (linkPage === currentPage) {
            link.classList.remove("has-text-white");
            link.classList.add("has-text-success");
        }
    });
});