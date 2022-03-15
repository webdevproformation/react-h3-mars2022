import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './composants2/Menu';
import { Form } from './composants2/Form';
import { Exo } from './composants2/Exo';

function App() {
 
  return (
    <div className='container'>
      <header className='row'>
        <Menu />
      </header> 
      <main className='row'>
       <Form />
       <Exo />
      </main> 
    </div>
  );
}

export default App;
