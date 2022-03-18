## projet 

projet => nouvelle fonctionnalité => effectuer des tests Manuellement

=> plus l'application l'application que vous allez réaliser 
=> long à réaliser

=> effectuer des updates => refactoriser votre code 
=> certaines fonctionnalités risquent de ne plus fonctionner 

=> code qui permet de vérifier votre code 

test unitaire => 
prendre une fonction et la tester de manière indépendance 
rapide à exécuter 
facile à écrire 
faible confiance dans la cohérence de votre projet

test d'intégration
tester des fonctions AVEC leur dépendance 
un peu plus lent en terme d'exécution 
un peu moins facile à écrire
vérifier que certains block de votre application sont corrects

test end to end => e2e
tester une scénario en intégralité (comme si le développeur le réalise lui même à la main )
plus compliqué à écrire
si vous êtes amener modifier votre code => modifier le test
plus lent 
=> happy path 

=> PHPUnit 
=> Javascript => 

=> jasmine / mocha chai sinon
=> jest 
=> npx create-react-app => jest est installé par défaut 

=> créée par les équipes de Facebook 

----

fichier.test.js

// grouper des tests 
describe("décrire un scénario" ,() => {

    // un test 
    test("tester la fonction ..." , () => {
        // traitement récupération de données / exécution de fonction 
        // assertion 
        expect(...).toBe()
    })
} )

Dans le dossier src, créer un nouveau dossier 
__test__
créer le fichier premier.test.js

dans le fichier premier.test.js

créer une nouvelle fonction => Majuscule 
cette fonction prend un paramètre de type string 
cette fonction va retourner le paramètre avec la première lettre en Majuscule 

créer le test dans le fichier premier.test.js qui va vérifier cette fonction Majuscule 

------------------

dans le fichier lib.js  ajouter la fonction suivante

export const valeurAbsolue = (chiffre) => {
  if(chiffre > 0) return chiffre ;
  if(chiffre < 0) return -chiffre ;
  return 0
}

dans le fichier premier.test.js créer tous les tests nécessaires pour vérifier la fonction valeurAbsolue

------------------

dans le fichier crud.js créer une fonction qui s'appelle fizzBuzz 
=> paramètre nombre 
fonction retourner soit un nombre soit une chaine de caractères

1 == > 1
2  => 2
3  => Fizz (3 est un multiple de 3)
4 => 4 
5 => "Buzz" (5 est un multiple de 5)
6 => Fizz  (6 est un multiple de 3)
...
15 => FizzBuzz (15 est un multiple de 5 et 3 en même temps )

// une fois que vous avez créer cette fonction, réaliser les tests pour vérifier
// que la logique vous vous avez mis en place dans la fonction est à toutes épreuves 
 


