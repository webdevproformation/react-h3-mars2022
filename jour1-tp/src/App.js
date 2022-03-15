import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './composants2/Menu';
import { Form } from './composants2/Form';

function App() {
 
  return (
    <div className='container'>
      <header className='row'>
        <Menu />
      </header> 
      <main className='row'>
       <Form />
      </main> 
    </div>
  );
}

export default App;
