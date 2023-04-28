import { useEffect, useState } from "react"

export default function useScrollDirection() {
    
    const [scrollDirection, setScrollDirection] = useState("top");
    
    useEffect(() => {
        let lastScroll = window.pageYOffset;

        const updateDirection = () => {
            const scrollY = window.pageYOffset;
            if(scrollY == 0) {
                setScrollDirection('top');
            }

            const direction = scrollY > lastScroll ? 'down' : 'up';

            if(direction !== scrollDirection && (scrollY - lastScroll > 10 || scrollY - lastScroll < -10)) {
                setScrollDirection(direction);
            };
            
            lastScroll = scrollY;
        }

        window.addEventListener("scroll", updateDirection);

        return () => {
            window.removeEventListener("scroll", updateDirection);
        }
    },[scrollDirection])

    return scrollDirection;
}