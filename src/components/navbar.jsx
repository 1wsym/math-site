import React, { useState, useEffect } from 'react';
import "../assets/styles/navbar.css";

function Navbar({ link = "#", switchTheme }) {
    const [hiddenNav, setHiddenNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const funHiddenNav = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setHiddenNav(true);
            }
            else if (currentScrollY < lastScrollY) {
                setHiddenNav(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', funHiddenNav);

        return () => window.removeEventListener('scroll', funHiddenNav);
    }, [lastScrollY]);

    return (
        <nav className={hiddenNav ? 'hidden-nav' : ''}>
            <ul>
                <li><a href={link}>Главная</a></li>
                <li><a href={link}>Теория</a></li>
                <li><a href={link}>Практика</a></li>
                <li><a href={link}>Калькулятор</a></li>
                <li><a href={link}>Учебные материалы</a></li>
            </ul>
            <button className="col-themes" onClick={switchTheme}>
                <span className="material-symbols-outlined">light_mode</span>
                <span className="material-symbols-outlined">mode_night</span>
            </button>
            <hr />
        </nav>
    );
}

export default Navbar;