import { useState, useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width:"40px",
                height:"40px",
                fontSize: "18px",
                backgroundColor: "#000",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                display: isVisible ? "block" : "none",
            }}
        >
            ↑ 
        </button>
    );
};

export default BackToTop;