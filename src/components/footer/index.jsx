import { Link } from 'react-router-dom';
import { DISPLAY_LANG } from '../../config';
import './footer.css';

export default function Footer({ footerData }) {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="row">

                    <div className="top-side">
                        <div className="contacts">
                            <Link to={'/'}>
                                <img src={footerData.label.image} alt="logo" />
                            </Link>

                            <p className="descr">{footerData.label.descr[DISPLAY_LANG]}</p>

                            <div className="social-links top">
                                {
                                    footerData.label.footer_social_links.map(elem => (
                                        <a key={elem.id} href={elem.link} target="_blank" rel="noopener noreferrer">
                                            <img src={elem.image} alt="image" />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="links">
                            {
                                footerData.links.map(elem => (
                                    <div className="box" key={elem.id}>
                                        <h3>{elem.title}</h3>

                                        {
                                            elem.links.map((sub_elem, index) => (
                                                <Link key={index} to={sub_elem.link}>
                                                    <p>{sub_elem.label}</p>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="social-links bottom">
                        {
                            footerData.label.footer_social_links.map(elem => (
                                <a key={elem.id} href={elem.link} target="_blank" rel="noopener noreferrer">
                                    <img src={elem.image} alt="image" />
                                </a>
                            ))
                        }
                    </div>

                    <div className="bottom-side">Copyright © {new Date().getFullYear()}</div>

                </div>
            </div>
        </footer>
    );
}