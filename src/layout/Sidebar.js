import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const Sidebar = () => {
    return(
        <>
        <Nav vertical pills>
            <NavItem>
                <NavLink to="/" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="customers" className="nav-link">Customer</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="products" className="nav-link">Product</NavLink>
            </NavItem>
        </Nav>
        </>
    )
}

export default Sidebar;