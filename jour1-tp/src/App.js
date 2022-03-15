import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './composants2/Menu';
import { Form } from './composants2/Form';
import { Exo } from './composants2/Exo';
import { Article } from './composants2/Article';

function App() {
 
  return (
    <div className='container'>
      <header className='row'>
        <Menu />
      </header> 
      <main className='row'>
       <Form />
       <Exo />
       <Article />
      </main> 
    </div>
  );
}

export default App;
