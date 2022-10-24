import CardComponent from '../card/CardComponent'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Main1(params) {
    return(
        <div>
        <CardComponent title={'Jordan 4 University Blue'} description={'chau'} ImageURL={<Card.Img variant="top" src="http://admin.digitalsport.com.ar/files/uploads/DIO%20AGOSTO%2021/Jordan%204%20Retro%20University%20Blue%20(1).png" />}/>
        <CardComponent title={'Jordan 1 University Blue'} description={'las amo'} ImageURL={<Card.Img variant="top" src="https://moneyinc.com/wp-content/uploads/2022/01/Jordan-1-University-Blue.jpg"/>}/>
        </div>
    )
}
export default Main1