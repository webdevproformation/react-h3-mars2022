import { Menu } from "./composants/Menu";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { ArticleProvider } from "./context/articleContext"

function App() {
 
  return (
    <div className="App">
        <UserProvider>
          <Menu ></Menu>
          <ArticleProvider>
            <Outlet />
          </ArticleProvider>
        </UserProvider>
    </div>
  );
}

export default App;
