import Image from "next/image"
import styles from "./styles.module.scss"
import { IconFacebook, IconInstagram, IconMessenger } from "~/public/assets/svgs"

export default function IntroduceCard(props) {


    return (
        <div className={styles['card']}>
            <div className={styles['card__avatar']}>
                <Image src={props.avatar} width={230} height={230} alt={props.name} />
            </div>
            <div className={styles['card__name']}>
                {props.name}
            </div>
            <div className={styles['card__role']} style={{color: props.roleColor, fontSize: props.roleSize}}>
                {props.role}
            </div>
            <div className={styles['card__desc']}>
                {props.desc}
            </div>
            <div className={styles['card__social']}>
                {props.facebook &&
                    <a href={props.facebook}>
                        <IconFacebook
                            width="30px"
                            height="30px"
                        />
                    </a> 
                }
                {props.instagram &&
                    <a href={props.instagram}>
                        <IconInstagram
                            width="30px"
                            height="30px"
                        />
                    </a> 
                }
                {props.messenger &&
                    <a href={props.messenger}>
                        <IconMessenger 
                            width="30px"
                            height="30px"
                        />
                    </a> 
                }

            </div>
        </div>
    )
}