import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';

//Pages
import Home from './Account/Pages/Home';
import SignIn from './Account/Pages/SignIn';
import SignInIdentify from './Account/Pages/SignInIdentify';
import SignInRecover from './Account/Pages/SignInRecover';
import SignUp from './Account/Pages/SignUp';
import SignUpInfo from './Account/Pages/SignUpInfo';

//Components
import Header from './Account/Components/Header';


function App() {
  return (
    <Container>
     <Header />
     <Routes>
       {/* http://localhost:3000 */}
       <Route path="/" element={<Home />} />
       {/* http://localhost:3000/signin */}
       <Route path="/signin" element={<SignIn />} />
       {/* http://localhost:3000/signin/identify */}
       <Route path="/signin/identify" element={<SignInIdentify />} />
       {/* http://localhost:3000/signin/recover */}
       <Route path="/signin/recover" element={<SignInRecover />} />
       {/* http://localhost:3000/signup */}
       <Route path="/signup" element={<SignUp />} />
       {/* http://localhost:3000/signup/info */}
       <Route path="/signup/info" element={<SignUpInfo />} />
     </Routes>
  </Container>
  );
}

export default App;