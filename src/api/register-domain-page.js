// import axios from "../axios";

export const getRegisterDomainPageData = async () => {
    try {
        const res = await fetch('http://localhost:8000/register_domain_page');
        return res.json();
    } catch (error) {
        console.log(error);
    }
};