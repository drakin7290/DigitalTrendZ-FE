import { useEffect } from "react"
import { Blob1 } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import KUTE from "kute.js"

export default function TheBlob() {
    useEffect(() => {
        var tween = KUTE.fromTo(
            '#blob1', 
            { path: '#blob1' }, 
            { path: '#blob2' },
            { repeat: 999, duration: 3000, yoyo:true }
        )
        tween.start();
    },[])

    return (
        <>
            <Blob1 className={styles['theblob']}/>
        </>
    )
}