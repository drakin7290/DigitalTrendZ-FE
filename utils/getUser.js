import { useEffect, useState } from "react";


export default function getUser() {
    const [userInfo, setUserInfo] = useState({name: "", image: "", session: false});
    useEffect(() => {
    const checkout = typeof window !== 'undefined' ? sessionStorage.getItem('user_info') : null
    if(checkout != null) {
        setUserInfo(JSON.parse(checkout));
    };
    },[userInfo]);
    return userInfo;
}