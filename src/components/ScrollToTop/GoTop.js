import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import './GoTop.css'


export const GoTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }
    return (
        <div
            className="scroll-to-top cursor-pointer text-center"
            onClick={scrollToTop}
        >
            <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}