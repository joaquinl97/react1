import './Card2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card2({name, email, phone, city}) {
    return(
        <div className='bg-danger m-5 p-3'>
            <div>Datos de usuario</div>
            <div>Nombre: {name}</div>
            <div>Email: {email}</div>
            <div>Teléfono: {phone}</div>
            <div>Ciudad: {city}</div>
        </div>
    )
}
export default Card2;