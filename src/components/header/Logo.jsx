import { Link } from "react-router-dom";

export default function Logo({ logo }) {
    return (
        <Link to="/" className="logo">
            <img src={logo.image} alt="logo" />
        </Link>
    )
}