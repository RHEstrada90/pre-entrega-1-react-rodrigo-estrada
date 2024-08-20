import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos a la Reactstore" />
    </>
  );
}

export default App;
