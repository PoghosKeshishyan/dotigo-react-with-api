import { useEffect, useState } from "react";
import { DISPLAY_LANG } from '../config';
import { getRegisterDomainPageData } from '../api/register-domain-page';
import { getDomains } from "../api/global";
import Loading from "../components/loading";
import TopLevelDomains from '../components/top-level-domains';
import DomainList from "../components/register-domain-page/DomainList";
import '../stylesheets/registerDomainPage.css';

export default function RegisterDomainPage() {
    const [loading, setLoading] = useState(true);
    const [pageData, setPageData] = useState(null);
    const [currentDomains, setCurrentDomains] = useState(null);
    const [searchedDomain, setSearchedDomain] = useState(sessionStorage.getItem('searched-domain'));

    useEffect(() => {
        const loadingData = async () => {
            const resPageData = await getRegisterDomainPageData();
            setPageData(resPageData);

            const resDomains = await getDomains(searchedDomain);
            setCurrentDomains(resDomains);
        };

        loadingData();
        setLoading(false);
    }, [searchedDomain]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (searchedDomain) {
            const resDomains = await getDomains(searchedDomain);
            setCurrentDomains(resDomains);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return pageData && currentDomains && (
        <div className="RegisterDomainPage wrapper">
            <p className="sub-title">{pageData.sub_title[DISPLAY_LANG]}</p>
            <h1 className="title">{pageData.title[DISPLAY_LANG]}</h1>

            <div className="content">
                <form className="search-domain-form" onSubmit={onSubmit}>
                    <input type="search" required value={searchedDomain} onChange={e => setSearchedDomain(e.target.value)} />
                    <input type="submit" className="btn" value={pageData.btn_text[DISPLAY_LANG]} />
                </form>

                <TopLevelDomains />
            </div>

            {currentDomains.length ? <DomainList currentDomains={currentDomains} /> : (
                <div className="no-domain-message">
                    {pageData.no_domain_messages[DISPLAY_LANG]}
                </div>
            )}
        </div>
    )
}