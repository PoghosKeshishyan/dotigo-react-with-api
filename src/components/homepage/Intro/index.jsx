import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLevelDomains from '../../top-level-domains';
import './Intro.css';

export default function Intro({ introData }) {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        sessionStorage.setItem('searched-domain', input);
        navigate('/domains-register');
    };

    return (
        <div className="intro" style={{backgroundImage: `url(${introData.image})`}}>
            <div className="wrapper">
                <div className="row flex-center">
                    <div className="title">
                        <h1>{introData.title}</h1>
                        <p>{introData.descr}</p>
                    </div>

                    <div className="search">
                        <form onSubmit={onSubmit}>
                            <input type="search" placeholder={introData.placeholder} value={input} onChange={onChangeInput} required />
                            <input type="submit" value={introData.btn_text} className="btn" />
                        </form>

                        <TopLevelDomains />
                    </div>
                </div>
            </div>

            <img src="images/home_page/intro-border-bottom.svg" alt="border-bottom" className="border-bottom" />
        </div>
    );
}