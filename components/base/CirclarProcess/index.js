import styles from "./styles.module.scss"

export default function CirclarProcess({numOfDay, children}) {

    const dashoffset = () => {
        let ratio = numOfDay/ 90;
        return 472 - (472*ratio);
    }

    const circleStyle = {
        strokeDashoffset: `${dashoffset()}`,
    }

    return (
            <div className={styles['skill']}>
                <div className={styles['outer']}>
                    <div className={styles['inner']}>

                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px" className={styles['svg']}>
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#FBBC4B" />
                    <stop offset="100%" stop-color="#1364FB" />
                    </linearGradient>
                </defs>
                <circle className={styles['circle']} cx="75" cy="75" r="65" stroke-linecap="round" style={circleStyle} />
                </svg>
                {children}
            </div>
    )
}