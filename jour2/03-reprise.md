## reprise

=> relancer le projet d'hier
=> terminal
=> cd jour1-tp
=> npm start

=> serveur de développement => http://localhost:3000 

// dans le dossier src => composants2

// src/App.js => supprimer les composants 
// supprimer les imports / supprimer tous les composants

import './App.css';

function App() {
 
  return (
    <div>
     
    </div>
  );
}

export default App;

// 0 installer Bootstrap
// lancer un deuxième terminal
// cd jour1-tp
// npm i bootstrap => dans le dossier node_modules
// App.js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

cas pratique 1 => dans le dossier composants2

cas pratique 2 =>
col => qui va contenir 1 formulaire 
contient 2 champs => email / commentaire / bouton pour soumettre le formulaire


cas pratique 3 
créer le composant Exo
ce composant contient un formulaire ayant 3 champs 
input pour mettre son nom
input pour mettre son age
un menu déroulant select pour sélectionner son pays => france / allemagne / belgique

récupérer les différentes valeurs mise dans le formulaire du composant dans le state  
