import { DISPLAY_LANG } from '../config';
import axios from "../axios";

export const getHostingPageData = async () => {
    try {
        const resHeading = await fetch(`http://localhost:8000/hosting_page_heading?lang=${DISPLAY_LANG}`);
        const resQuestionHeading = await fetch('http://localhost:8000/hosting_page_question_list_heading');
        const resQuestion = await fetch(`http://localhost:8000/hosting_page_question_list?lang=${DISPLAY_LANG}`);

        return {
            heading: await resHeading.json(),
            question: { heading: await resQuestionHeading.json(), data: await resQuestion.json() },
        };
    } catch (error) {
        console.log(error);
    }
};