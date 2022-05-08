import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
//Pages

//Components

function App() {
  return (
   <Container>
     <Header />
     <Routes>
      <Product
       {/* http://localhost:3000 */}
       <Route path="/" element={<Home />} />
       {/* http://localhost:3000/about */}
       <Route path="/about" element={<About />} />
       {/* http://localhost:3000/contact */}
       <Route path="/contact" element={<Contact />} />
       {/* http://localhost:3000/categories */}
       <Route path="/categories" element={<Category />} />
       {/* http://localhost:3000/register */}
       <Route path="/register" element={<Register />} />
     </Routes>
  </Container>
  );
}

export default App;