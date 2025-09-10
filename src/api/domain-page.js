// import axios from "../axios";

export const getDomainPageData = async () => {
    try {
        const res = await fetch('http://localhost:8000/domain_page');
        return res.json();
    } catch (error) {
        console.log(error);
    }
};