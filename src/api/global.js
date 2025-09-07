import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getHostingData = async (billingType) => {
    try {
        const res = await axios.get(`global/hosting_plans?lang=${DISPLAY_LANG}&billing=${billingType}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTopLevelDomains = async () => {
    try {
        const res = await axios.get('global/top_level_domains')
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getDomains = async (title) => {
    try {
        const res = await fetch('http://localhost:8000/domains?title='+title);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};