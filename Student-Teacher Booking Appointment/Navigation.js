import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
    <>
            <Navbar style={{ backgroundColor: '#333', color: '#fff' }} expand="lg" collapseOnSelect>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link active style={{ color: '#f00' }} href="/login">Admin</Nav.Link>
                        <Nav.Link active style={{ color: '#f00', marginLeft: '1em' }} href="/tlogin">Teacher</Nav.Link>
                        <Nav.Link active style={{ color: '#f00', marginLeft: '1em' }} href="/slogin" className="mr-3">Student</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;