import { removeCookies } from "cookies-next";
import { USER_AUTH } from "~/context/defaultConst";

export default function signOut() {
    removeCookies(USER_AUTH.JSON);
    removeCookies(USER_AUTH.TOKEN);
}