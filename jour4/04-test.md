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