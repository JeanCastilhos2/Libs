import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import NovoLivro from './components/pages/NovoLivro';
import Sobre from './components/pages/Sobre';
import Livros from './components/pages/Livros';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {

  return (
    <BrowserRouter> 
        <Navbar/>
        <Container customClass="min_height">
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/sobre" exact element={<Sobre/>}/>
            <Route path="/livros" exact element={<Livros/>}/>
            <Route path="/novolivro" exact element={<NovoLivro/>}/>
          </Routes>
        </Container>
        <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
