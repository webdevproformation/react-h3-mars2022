import './App.css';
import { Exo } from './composants/Exo';
import { Exo2 } from './composants/Exo2';
import { Form } from './composants/Form';

function App() {
  return (
    <div>
      <Exo2 />
      <hr />
      <Form />
      <hr />
      <Exo />
    </div>
  );
}

export default App;
