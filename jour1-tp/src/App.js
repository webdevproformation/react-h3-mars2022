import logo from './logo.svg';
import './App.css';

//cd jour1-tp 
// npm start

function App() {
  const titre = "premier composant avec un peu plus de text"; 

  function hello(lang){
    if(lang == "fr"){
      return "bonjour";
    }
    return "hello"
  }

  return (
    <div>
      {/** interpolation <?= $titre ?>  */}
      <p className="text-bleu">{ titre } <br /> de JSX</p>
      <input type="text" id="nom" />
      <img src="https://via.placeholder.com/200x100" alt="" />
      <p>découverte de JSX</p>
      {/* un commentaire en jsx */}
      <p>{ hello("fr") }</p>
    </div>
  );
}

export default App;
