import { NavLink } from "react-router-dom";


const NavLinks = () => {
    return (
        <>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/community'>Community</NavLink>
            </li>
            <li>
              <NavLink to='/blogs'>Blogs</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact Us</NavLink>
            </li>
        </>
    );
};

export default NavLinks;