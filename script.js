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
    cadran.style.zIndex = 2;
    boitier.style.zIndex = 3;
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
  
  //################################## + ou - PANIER ##################################
  
  document.addEventListener("DOMContentLoaded", function() {
    const decreaseButton = document.querySelector(".quantity-decrease");
    const increaseButton = document.querySelector(".quantity-increase");
    const quantityInput = document.querySelector(".quantity-input");
  
    let currentValue = parseInt(quantityInput.value);
  
    decreaseButton.addEventListener("click", function() {
      if (currentValue > 1) {
        currentValue--;
        quantityInput.value = currentValue;
      }
    });
  
    increaseButton.addEventListener("click", function() {
      currentValue++;
      quantityInput.value = currentValue;
    });
  
    quantityInput.addEventListener("input", function() {
      let newValue = parseInt(quantityInput.value);
      if (newValue >= 1 && !isNaN(newValue)) {
        currentValue = newValue;
      } else {
        quantityInput.value = currentValue;
      }
    });
  });

  //################################## MINIATURES ##################################
  
  document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('mouseover', () => {
        const thumbnailSrc = thumbnail.getAttribute('src');
        mainImage.setAttribute('src', thumbnailSrc);
      });
    });
  });

    //################################## ARROWS ##################################

  document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.querySelector(".thumbnail-container");
    const thumbnails = thumbnailsContainer.querySelectorAll(".thumbnail");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const mainImage = document.querySelector("#main-image");
  
    let currentIndex = 0;
  
    // Fonction pour afficher l'image correspondante au clic sur une miniature
    function showImage(index) {
      thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove("active");
      });
  
      thumbnails[index].classList.add("active");
      mainImage.src = thumbnails[index].src;
      currentIndex = index;
    }
  
    // Fonction pour faire défiler les miniatures vers la gauche
    function scrollThumbnailsLeft() {
      const previousIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      showImage(previousIndex);
    }
  
    // Fonction pour faire défiler les miniatures vers la droite
    function scrollThumbnailsRight() {
      const nextIndex = (currentIndex + 1) % thumbnails.length;
      showImage(nextIndex);
    }
  
    // Événement de clic sur la flèche gauche
    arrowLeft.addEventListener("click", scrollThumbnailsLeft);
  
    // Événement de clic sur la flèche droite
    arrowRight.addEventListener("click", scrollThumbnailsRight);
  
    // Événement de clic sur une miniature pour afficher l'image correspondante
    thumbnails.forEach(function(thumbnail, index) {
      thumbnail.addEventListener("click", function() {
        showImage(index);
      });
    });
  });
