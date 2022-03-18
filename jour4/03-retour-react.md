npx create-react-app jour4-tp
cd jour4-tp
npm start

dans dossier src/ créer un sous dossier Form.jsx

state => []

return 
<form>
div => liste des articles 

créer un nouveau composant => Exo  
state formulaire / et un deuxième state pour les résultats
formulaire 
3 champs 
    nom 
    email 
    commentaires

div en dessous 

lorsque vous soumettez le formulaire => modifier le state de résultat => 
remplir la div avec les résultats saisis !

--------------------------------

créer un nouveau composant  Exo2

state resultat = [{id : 1 , nom : "Produit 1" },{id : 2 , nom : "Produit 2" } ]

afficher dans la vue du composant les différents produits 
via un .map()

ajouter pour chaque produit un bouton de suppression 

créer la fonction qui permet de supprimer le produit concerné 

------------------------

// dans le fichier Article.test.js

créer le deuxième test d'intégration qui permet de vérifier que le composant Article contient bien une balise p 
ET
que cette balise contient bien le texte "lorem ipsum"

// --------------------------

// créer un nouveau fichier de test Exo2.test.js 

// initialiser le composant Exo2 

// cliquer via FireEvent sur la bouton de l'article ayant l'id 2 
// vérifier que le produit 2 n'est plus présent dans le DOM 

// --------------------------

Dans le composant Exo ajouter un nouveau test 
effectuer deux insertions 

supprimer le dernier 
verifier que seul le premier est présent dans le DOM 

