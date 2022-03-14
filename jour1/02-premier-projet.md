## setup

1 créer un nouveau dossier react (sur bureau)
2 lancer VisualStudio Code
3 Fichier > OUvrir Dossier > sélectionner le dossier react (qui est sur le bureau)

## npm i  / npm i -g / npx

npm = Node Package Manager => télécharger des dossiers / packages
depuis le site internet npmjs.com (dépot sur internet)

npm i => télécharger et installer en local 
npm install => package disponible QUE pour 1 seul projet
            => si j'ai besoin de ce package je dois le réinstaller

npm i -g   => télécharger et installer en global  
npm install --global

typescript => tsc 
yarn => 

npx => télécharger votre package en global et en même temps installé en local + exécuter du binaire 
npm -x
npm --exec 

npm i -g create-react-app 
create-react-app projet 

--

npx create-react-app jour1-tp


node_module => dépendances
public => ressouces public (comme les images / pdf)
 index.html <div id="root"></div>
React va injecter tous les composants dans cette balise unique 

src => source => passer 99% du temps 

 index.js (point d'entrée de notre React)

    .html 


    <script>
    const a = 10 ;
    console.log(a)
    </script>

    <script src="script.js"></script>

script.js
const a = 10 ;
console.log(a)

<script>
    const a = 10 ;
    console.log(a)
</script>

<script>
    let a = 10 ;
    console.log(a)
</script>

<script>  
    function toto(){ // création de fonction

    }
    toto() // exécuter de fonction 
</script>  

<script>  
    (function toto(){ 
        // a = 10 ;
        console.log(a) // 10
    })() 
</script> 
<script>  
    (function toto(chiffre){ 
        const a = chiffre ;
        const tata = "bonjour"
        console.log(a)
        window.tata = tata 
    })(12) 
</script> 

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]) \
.push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0]; \
a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script', \
'https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-XXXXXXXX-Y', 'auto');
  ga('send', 'pageview');

</script>


