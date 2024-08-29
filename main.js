document.addEventListener('DOMContentLoaded', () => {
    // Fetch dei dati dal file JSON
    fetch('data.json') // Assicurati che il percorso sia corretto
      .then(response => response.json())
      .then(plates => {
        const plateWrapper = document.getElementById("dessert");
  
        // Ciclo sui dati e creazione degli elementi per ogni piatto
        plates.forEach((plate) => {
          const plateElement = document.createElement("div");
          plateElement.classList.add("card", "col-lg-4", "col-sm-6", "border-0", "position-relative", "pb-2", "bg-my-primary");
  
          plateElement.innerHTML = `
          <div class="card-img rounded-4 overflow-hidden">
            <img class="w-100" src="${plate.image.desktop}" alt="${plate.name}">
          </div>
          <div class="position-relative pb-3">
              <div class="position-absolute d-flex justify-content-center add-to-cart w-100">
                <button class="add-to-cart-btn btn p-2 ps-4 pe-4 rounded-5 text-center bg-white">
                  <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart icon">
                  <span class="ps-1 fs-6 bold">Add to Cart</span>
                </button>
              </div>
          </div>
          <div class="card-body p-2">
            <span class="tiny-text">${plate.category}</span>
            <h5 class="bold">${plate.name}</h5>
            <h6>$${plate.price.toFixed(2)}</h6>
          </div>
        `;

        // Aggiungi il nuovo elemento creato al contenitore #dessert
        plateWrapper.appendChild(plateElement);
      });
    })
    .catch(error => console.error('Errore durante il caricamento del file JSON:', error));
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
console.log(addToCartButtons);


// logica della modale

// ho importato nell'html lo script di js bootstrap

// seleziono il bottone dall'html e gli do un eventListener onclick
document.getElementById('cart-modal-btn').addEventListener('click', function() {
  // creo una modale usando la classe di bootstrap Modal che presuppone il selezionamento di un elemento html che fungera' da modale
  var myModal = new bootstrap.Modal(document.getElementById('cart-modal'));
  
  myModal.show();
});


