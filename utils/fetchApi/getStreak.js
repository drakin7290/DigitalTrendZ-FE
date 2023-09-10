import { getCookie } from "cookies-next";
import { USER_AUTH } from "~/context/defaultConst";
import { API, API_ROOT} from "~/core/api/config";
import axios from "axios";

export default async function getStreak() {
    const user_token = getCookie(USER_AUTH.TOKEN);
    try {
        const { data } = await axios.get(API_ROOT + API.USER.STREAK, {
            headers: { Authorization: 'Bearer ' + user_token },
        });
        
        if(!data.error) {
            return data.streak
        }
    } catch(error) {
        console.log(error);
    }
}