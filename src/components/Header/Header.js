import {Link} from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <header>
            <h1><Link to="/">eRecruit</Link></h1>
        </header>
    )
}