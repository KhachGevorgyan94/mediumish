import Nav from "./Components/Nav/Nav";
import '../src/Components/Nav/Nav.css'
import Universal from "./Components/Universal/Universal";
import '../src/Components/Universal/Universal.css'
import Blok from "./Components/Blok/Blok";
import '../src/Components/Blok/Blok.css'
import '../src/App.css'

function App() {
  return (
    <div className="zz">
     <Nav/>
     {/* <Universal h11='Were living some strange times' p1='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/> */}
     <Blok />
    </div>
  );
}

export default App;
