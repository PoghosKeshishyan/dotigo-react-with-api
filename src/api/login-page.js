import { DISPLAY_LANG } from "../config";
import axios from "../axios";

export const getLoginData = async () => {
  const res = await axios.get(`users/login-page?lang=${DISPLAY_LANG}`);
  return res.data[0]; 
};
