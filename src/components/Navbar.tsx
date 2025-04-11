import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav>
        <span className="title">My Beer Site</span>
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/BeerPage">BeerPage</NavLink></li>
        </ul>
        </nav>
    )
}