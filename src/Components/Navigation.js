import { Nav, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container } from 'reactstrap';

function Navigation(){
return(
<div className='navbar'>
            <Container>  
        	<Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/stock">Stocks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="" disabled>
            Price History
            </Nav.Link>
        </Nav.Item>
        </Nav>
        </Container>
        </div>
        )
    }
    export default Navigation;