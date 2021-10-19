import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './compunent/About/About';
import Contact from './compunent/Contact/Contact';
import Footer from './compunent/Footer/Footer';
import Header from './compunent/Header/Header';
import Home from './compunent/Home/Home';
import LogIn from './compunent/LogIn/LogIn';
import NotFound from './compunent/NotFound/NotFound';
import Services from './compunent/Services/Services';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/service">
           <Services></Services>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/contact">
           <Contact></Contact>
         </Route>
         <Route path="/login">
           <LogIn></LogIn>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
