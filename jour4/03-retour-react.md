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

créer un nouveau composant  Exo 2

state resultat = [{id : 1 , nom : "Produit 1" },{id : 2 , nom : "Produit 2" } ]

afficher dans la vue du composant les différents produits 
.map()

ajouter pour chaque produit un bouton de suppression 

créer la fonction qui permet de supprimer le produit concerné 