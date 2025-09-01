import { useState, useEffect, useRef } from 'react';
import { DISPLAY_LANG } from '../../../config';
import { Link } from 'react-router-dom';
import './HelpCenter.css';

export default function HelpCenter({ helpCenterData }) {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const openChat = () => {
    if (window.smartsupp) {
      window.smartsupp("chat:open");
      setShow(false);
    }
  };

  return (
    <div className="HelpCenter wrapper">
      <div className="general flex-center" onClick={() => setShow(true)}>
        <img src="/images/home_page/help-center/question-icon.svg" alt="question-icon" />
        {helpCenterData.title[DISPLAY_LANG]}
      </div>

      {show && (
        <div className="modal" ref={modalRef}>
          <div className="close" onClick={() => setShow(false)}>
            <img src="/images/home_page/help-center/close-icon.svg" alt="close-icon" />
          </div>

          <div className="links">
            {helpCenterData.links.map((elem) => (
              <Link
                to={elem.url}
                key={elem.id}
                className="flex-center"
                onClick={() => elem.url === '#' && openChat()}
              >
                <img src={elem.image} alt={elem.title} />
                {elem.title[DISPLAY_LANG]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}