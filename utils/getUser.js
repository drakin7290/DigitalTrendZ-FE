// import { useEffect, useState } from "react";

import { getCookie } from "cookies-next";
import { USER_AUTH } from "~/context/defaultConst";


export default function getUser() {
    const data = getCookie(USER_AUTH.JSON);
    const result = data ? JSON.parse(data) : {};
    result.avatar = result.avatar ? `https://digitaltrendz.online/storage/${result.avatar}` : '/imgs/logo.png';

    return result

    // const [userInfo, setUserInfo] = useState({name: "", image: "", session: false});
    // useEffect(() => {
    // const checkout = typeof window !== 'undefined' ? sessionStorage.getItem('user_info') : null
    // if(checkout != null) {
    //     setUserInfo(JSON.parse(checkout));
    // };
    // },[userInfo]);
    // return userInfo;
}