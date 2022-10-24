import './CardComponent.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardComponent({title, description, ImageURL}) {
    return(
        <Card style={{ width: '18rem' }}>
            {ImageURL}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
export default CardComponent;