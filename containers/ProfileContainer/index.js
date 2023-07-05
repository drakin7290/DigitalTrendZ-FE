import isLogged from "~/utils/isLogged";
import styles from "./styles.module.scss";
import getUser from "~/utils/getUser";
import InformationSection from "./InformationSection";
import { useState, useMemo } from "react";
//icons
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


export default function ProfileContainer() {
const [tab, setTab] = useState("0");

    const logged = isLogged();
    const data = useMemo(() => getUser());
    
    function handleChangeTab(e) {
        console.log(e.currentTarget.id);
        setTab(e.currentTarget.id);
    }
    
    const backgroundStyle = {
        backgroundImage: `url(https://images.pexels.com/photos/912413/pexels-photo-912413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    }
    const imageStyle = {
        backgroundImage: `url(${data.avatar})`,
    }
    

    return (
        <main className={styles['main']}>
            {logged &&
                <>
                    <div className={styles['background']} style={backgroundStyle}>
                        <div className={styles['img']} style={imageStyle}></div>
                    </div>
                    <div className={styles['name-container']}>
                        <p className={styles['name']}>{data.name}</p>
                    </div>
                    <div className={styles['content']}>
                        <div className={styles['tab']}> 
                            <div className={`${styles['tab__item']} ${tab == "0" ? styles['--active'] : ""}`} id="0" onClick={(e) => handleChangeTab(e)} >
                                <div className={styles['tab__icon']} >
                                    <PermIdentityIcon fontSize="large"/>
                                </div>
                                <p>Thông tin</p>
                            </div>
                        </div>
                        { tab == "0" ?
                        <InformationSection dataUser={data} />
                        : 
                        <div></div>
                        }
                    </div>
                </>
            }
        </main>
    )
}
