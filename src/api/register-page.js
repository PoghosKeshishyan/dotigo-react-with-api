import { DISPLAY_LANG } from "../config";
import axios from "../axios";

export const getRegisterData = async () => {
    const res = await axios.get( `users/register-page?lang=${DISPLAY_LANG}`)
    return res.data
}