import { useEffect, useRef, useState } from "react";
import { DISPLAY_LANG } from '../../config';
import { Link } from "react-router-dom";

export default function RightSide({ btns, langs, setNavbarIsActive }) {
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const langRef = useRef();
    const currentLang = langs.find(l => l.code === DISPLAY_LANG);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setShowLangDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="right-side flex-center">
            <div className="account-buttons flex-center">
                {btns.map(elem => (
                    <Link to={elem.link} key={elem.id} className="btn">
                        {elem.label[DISPLAY_LANG]}
                    </Link>
                ))}
            </div>

            <div className="change-lang" ref={langRef}>
                <div
                    className="selected-lang flex-center"
                    onClick={() => setShowLangDropdown(prev => !prev)}
                >
                    {currentLang && (
                        <>
                            <img src={currentLang.image} alt={`${currentLang.label} Flag`} />
                            <span>{currentLang.label}</span>
                            <img src="/images/partials/arrow.svg" className="flag-arrow" alt="arrow" />
                        </>
                    )}
                </div>

                {showLangDropdown && (
                    <div className="lang-dropdown">
                        {langs.map(lang => (
                            <div key={lang.code} className="lang-option flex-center">
                                <img src={lang.image} alt={`${lang.label} Flag`} />
                                <a href={lang.link}>{lang.label}</a>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="icons">
                <img src="/images/partials/auth-icon.svg" alt="auth" className="auth-icon" />

                <img 
                  alt="menubar" 
                  className="menubar-icon"
                  src="/images/partials/menubar.svg" 
                  onClick={() => setNavbarIsActive(prev => !prev)}
                />
            </div>
        </div>
    );
}