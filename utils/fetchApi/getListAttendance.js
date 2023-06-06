import { getCookie } from "cookies-next";
import { USER_AUTH } from "~/context/defaultConst";
import { API, API_ROOT} from "~/core/api/config";
import axios from "axios";

export default async function getListAttendance() {
    const user_token = getCookie(USER_AUTH.TOKEN);
    const { data } = await axios.get(API_ROOT + API.USER.LIST_ATTENDANCE, {
        headers: { Authorization: 'Bearer ' + user_token },
    });
    return data;
}