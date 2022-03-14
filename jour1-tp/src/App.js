import logo from './logo.svg';
import './App.css';
import { premier as Premier } from './composants/Premier';
import { Deuxieme } from './composants/Deuxieme';
import { Troisieme } from './composants/Troisieme';
import { Quatrieme } from './composants/Quatrieme';
import { Cinquieme } from './composants/Cinquieme';
import { Sixieme } from './composants/Sixieme';
import { Septieme } from './composants/Septieme';



//cd jour1-tp 
// npm start

function App() {
  const age = 12
  const nom = "Alain" ;
  const formation = "Formation au sein de H3"

  return (
    <div>
      <Septieme />
      <Sixieme  />
      <h1>je m'appelle {nom}</h1>
      <ul>
          <li>j'ai { age + 20 }  ans  </li>
          <li> je suis une {formation} </li> 
      </ul>
      <Cinquieme />
      <Premier />
      <Premier></Premier>
      <Quatrieme />
      <Deuxieme />
      <Troisieme />
    </div>
  );
}

export default App;
