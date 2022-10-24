import './home.css'
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Carousel } from "react-bootstrap";
import Main from '../components/main/main';

function HomePage() {
    //JS

// const AxiosPeticion=async()=> {
//     let response= await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log(response)
// }
// AxiosPeticion()


    return (

        <div className='body text-secondary'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
        

    );

}
export default HomePage;