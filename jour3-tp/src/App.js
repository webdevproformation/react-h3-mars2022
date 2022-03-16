import { Menu } from "./composants/Menu";
import { Outlet } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
        <Menu />
        <Outlet />

       
    </div>
  );
}

export default App;
