import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import useResize from "~/hooks/useResize";


export default function FacebookIframe() {
    const { device } = useResize();
    const size = {
        "extra-small" :{
            width: 350,
            height: 500,
        },
        "small" : {
            width: 350,
            height: 500,
        },
        "medium" : {
            width: 450,
            height: 500,
        },
        "large" : {
            width: 500,
            height: 500,
        }
    };

    return (
    <div className={styles['iframe-container']}>  
        <iframe src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdtz.agu&tabs=timeline&width=${size[device].width}&height=${size[device].height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`} width={size[device].width} height={size[device].height} style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>  
    )
}