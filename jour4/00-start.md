## tableau en javascript 

const tableau = [1,2,3]

héritage prototypal => js va ajouter des méthodes / propriété à la variable tableau

## deux types de méthodes 

méthodes qui font MUTER 

tableau.push()
.pop()
.splice()
.sort()
.shift()
.unshift()

méthode qui font un traitement sur le tableau et qui vont préserver la variable 

const resultat = tableau.map(function(){})
const resultat = tableau.filter(function(){})

// .map() .filter() => méthode de premier ordre 
fonctions qui prennent des fonctions comme paramètre au moment de l'exécution 

## chainage des méthodes 

// supprimer / modifier / afficher 
// EN 3 instructions
const filtrer = tableau.filter(function(){})
const html = filtrer.map(function(){})
document.querySelector("element").innerHTML = html 

// EN 1 instruction

document.querySelector("element").innerHTML = tableau.filter(function(){})
                                                     .map(function(){})

## ... => + - tableau / object 

dans React ...tableau => récupérer le contenu de la variable tableau 

// au moment où j'exécute mon composant 

const [variable , setVariable ] = useState([])

... 

setVariable([...variable , la modification  ])

