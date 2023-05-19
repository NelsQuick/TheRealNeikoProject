// Fonction pour mettre à jour la prévisualisation de la montre
function updateWatchPreview(elementType, imagePath) {
    const elementLayer = document.getElementById(`watch-${elementType}`);
    elementLayer.setAttribute('src', imagePath);
}

// Fonction pour superposer les éléments dans la prévisualisation
function stackWatchElements() {
    const cadran = document.getElementById('watch-cadran');
    const aiguilles = document.getElementById('watch-aiguilles');
    const bracelet = document.getElementById('watch-bracelet');
    const boitier = document.getElementById('watch-boitier');

    // Appliquer le positionnement des éléments
    bracelet.style.zIndex = 1;
    boitier.style.zIndex = 2;
    cadran.style.zIndex = 3;
    aiguilles.style.zIndex = 4;
}

document.addEventListener('DOMContentLoaded', function() {
    const aiguillesOptions = document.querySelectorAll('[data-element="aiguilles"]');
    const cadranOptions = document.querySelectorAll('[data-element="cadran"]');
    const braceletOptions = document.querySelectorAll('[data-element="bracelet"]');
    const boitierOptions = document.querySelectorAll('[data-element="boitier"]');

    // Ajouter des écouteurs d'événements pour les sélections de cadrans
    cadranOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            const imagePath = option.getAttribute('src');
            updateWatchPreview('cadran', imagePath);
            stackWatchElements();
        });
    });

    // Ajouter des écouteurs d'événements pour les sélections de bracelets
    braceletOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            const imagePath = option.getAttribute('src');
            updateWatchPreview('bracelet', imagePath);
            stackWatchElements();
        });
    });

    // Ajouter des écouteurs d'événements pour les sélections de boitiers
    boitierOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            const imagePath = option.getAttribute('src');
            updateWatchPreview('boitier', imagePath);
            stackWatchElements();
        });
    });
});