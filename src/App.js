import './App.css';
//Desde react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './views/home'

function App() {
  //JavaScript

  return (
    //HTML
   
    <div className='body text-secondary'>
      <Header/>
   
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
