import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getHostingData = async (billingType) => {
    try {
        const resHostingPlans = await axios.get(`global/hosting_plans?lang=${DISPLAY_LANG}&billing=${billingType}`);
        return resHostingPlans.data;
    } catch (error) {
        console.log(error);
    }
};