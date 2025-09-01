import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ navbar, navbarIsActive }) {
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenDropdownId(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (e, id, hasDropdown) => {
        if (!hasDropdown) return;
        e.stopPropagation();
        setOpenDropdownId(prev => (prev === id ? null : id));
    };

    return (
        <ul className={`navbar flex-center ${navbarIsActive ? 'active' : ''}`} ref={navRef}>
            {navbar.map(item => {
                const hasDropdown = item.dropdown.length > 0;
                const isOpen = openDropdownId === item.id;

                return (
                    <li
                        className={`has-dropdown ${isOpen ? 'open' : ''}`}
                        key={item.id}
                        onClick={(e) => toggleDropdown(e, item.id, hasDropdown)}
                    >
                        <NavLink to={item.link}>
                            {item.label}
                            {hasDropdown && <img src="/images/partials/arrow.svg" alt="arrow" />}
                        </NavLink>

                        {hasDropdown && isOpen && (
                            <ul className="dropdown" onClick={(e) => e.stopPropagation()}>
                                {item.dropdown.map(sub => (
                                    <li key={sub.id}>
                                        <NavLink to={sub.link}>{sub.label}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}