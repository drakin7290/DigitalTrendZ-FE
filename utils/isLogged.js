import { getCookie } from "cookies-next";
import { USER_AUTH } from "~/context/defaultConst";

export default function isLogged() {
    const token = getCookie(USER_AUTH.TOKEN);
    return !!token;
}