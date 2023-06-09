import isLogged from "~/utils/isLogged";
import styles from "./styles.module.scss";
import getUser from "~/utils/getUser";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InformationSection from "./InformationSection";
import { useState, useRef } from "react";

export default function ProfileContainer() {
    const [tab, setTab] = useState("0");

    const logged = isLogged();
    const data = useRef({...getUser()});
    
    function handleChangeTab(e) {
        console.log(e.currentTarget.id);
        setTab(e.currentTarget.id);
    }
    
    const backgroundStyle = {
        backgroundImage: `url(https://images.pexels.com/photos/912413/pexels-photo-912413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    }
    const imageStyle = {
        backgroundImage: `url(${data.current.avatar})`,
    }
    const activeTabStyle = {
        backgroundColor: '#1364FB',
        color: 'white',
    };

    return (
        <main className={styles['main']}>
            {logged &&
                <>
                    <div className={styles['background']} style={backgroundStyle}>
                        <div className={styles['img']} style={imageStyle}></div>
                    </div>
                    <div className={styles['name-container']}>
                        <p className={styles['name']}>{data.current.name}</p>
                    </div>
                    <div className={styles['content']}>
                        <div className={styles['tab']}> 
                            <div className={styles['tab__item']} id="0" onClick={(e) => handleChangeTab(e)} style={tab == "0" ? activeTabStyle : {}} >
                                <PermIdentityIcon 
                                    fontSize="large"
                                />
                                <p>Thông tin cá nhân</p>
                            </div>
                        </div>
                        { tab == "0" ?
                        <InformationSection dataUser={data.current} />
                        : 
                        <div></div>
                        }
                    </div>
                </>
            }
        </main>
    )
}
