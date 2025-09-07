import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getHomePageData = async () => {
    try {
        const resIntro = await axios.get(`homepage_intro?lang=${DISPLAY_LANG}`);
        const resServices = await axios.get(`homepage_services?lang=${DISPLAY_LANG}`);
        const resMap = await axios.get(`homepage_map?lang=${DISPLAY_LANG}`);
        const resHostingHeading = await axios.get(`homepage_hosting_plans_heading?lang=${DISPLAY_LANG}`);
        const resQuestionHeading = await axios.get('homepage_question_list_heading');
        const resQuestion = await axios.get(`homepage_question_list?lang=${DISPLAY_LANG}`);
        const resRegisterBanner = await axios.get(`homepage_register_banner?lang=${DISPLAY_LANG}`);
        const resHelpCenter = await axios.get(`homepage_help_center`);

        return {
            intro: resIntro.data[0],
            services: resServices.data[0],
            map: resMap.data[0],
            hostingPlansHeading: resHostingHeading.data[0],
            question: { heading: resQuestionHeading.data, data: resQuestion.data },
            registerBanner: resRegisterBanner.data[0],
            helpCenter: resHelpCenter.data[0]
        };
    } catch (error) {
        console.log(error);
    }
};