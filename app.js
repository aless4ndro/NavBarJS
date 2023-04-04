// Récupérer le sélecteur .nav-toggle ainsi que .links 
// Ecouter l'évènement 'click' sur .nav-toogle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('show-links');
});

  // si .links a pour class .show-links
    // la supprimer
  // sinon
    // l'ajouter

    if (document.querySelector('.links').classList.contains('show-links')) {
      // contains() renvoie true si la class est présente
      document.querySelector('.links').classList.remove('show-links');// remove() supprime la class
    } else {
      document.querySelector('.links').classList.add('show-links');// add() ajoute la class
    }
  

  // Vous pouvez arriver au même résultat avec classList.toggle

