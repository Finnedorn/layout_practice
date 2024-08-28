fetch('./data.json') // Percorso relativo al file JSON
  .then(response => response.json()) // Converte la risposta in un oggetto JSON
  .then(data => {
    const plates = data;
    console.log(plates); // Stampa i dati JSON
  })
  .catch(error => console.error('Errore durante il caricamento del file JSON:', error));