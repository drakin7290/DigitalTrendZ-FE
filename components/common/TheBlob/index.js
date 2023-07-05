import { useEffect } from "react"
import SvgBlob1 from "./Blob1";
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
            <SvgBlob1 className={styles['theblob']}/>
        </>
    )
}