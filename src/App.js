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
import PrivateRoute from './compunent/PrivateRoute/PrivateRoute';
import Registration from './compunent/Registation/Registaion';
import Services from './compunent/Services/Services';
import ServicesDetails from './compunent/ServicesDetails/ServicesDetails';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div>
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
         <PrivateRoute path='/serviceDetails/:detailsId'>
          <ServicesDetails></ServicesDetails>
         </PrivateRoute>
         <PrivateRoute path="/about">
           <About></About>
         </PrivateRoute>
         <Route path="/contact">
           <Contact></Contact>
         </Route>
         <Route path="/registration">
            <Registration></Registration>
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
