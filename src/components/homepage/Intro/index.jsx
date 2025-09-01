import { Fragment } from 'react/jsx-runtime';
import './Intro.css';

export default function Intro({ introData }) {
    return (
        <div className="intro" style={{backgroundImage: `url(${introData.intro.image})`}}>
            <div className="wrapper">
                <div className="row flex-center">
                    <div className="title">
                        <h1>{introData.intro.title}</h1>
                        <p>{introData.intro.descr}</p>
                    </div>

                    <div className="search">
                        <form>
                            <input type="search" placeholder={introData.intro.placeholder} />
                            <input type="submit" value={introData.intro.btn_text} className="btn" />
                        </form>

                        <div className="top-level-domains flex-center">
                            {
                                introData.topLevelDomains.map((elem, index, arr) => (
                                    <Fragment key={elem.id}>
                                        <p>{elem.label}</p>
                                        {index !== arr.length-1 && <div className="circle"></div>}
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <img src="images/home_page/intro-border-bottom.svg" alt="border-bottom" className="border-bottom" />
        </div>
    );
}