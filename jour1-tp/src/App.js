import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './composants2/Menu';
import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <div className='container'>
      <header className='row'>
        <Menu />
      </header> 
      <main className='row'>
       <Outlet />
      </main> 
    </div>
  );
}

export default App;
