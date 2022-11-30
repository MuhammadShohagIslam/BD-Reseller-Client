import { useState, useEffect } from "react";

const useDimensions = () => {
    const [pageSize, setPageSize] = useState(3);
    const [dimensions, setDimensions] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setDimensions(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        if (dimensions > 1024) {
            setPageSize(3);
        }
        if (dimensions <= 1024) {
            setPageSize(2);
        }
        if (dimensions <= 768) {
            setPageSize(2);
        }
        if (dimensions <= 320) {
            setPageSize(1);
        }
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dimensions, setPageSize]);

    return { dimensions, pageSize };
};

export default useDimensions;
