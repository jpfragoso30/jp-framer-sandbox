import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

function App() {
    const [status, setStatus] = useState("Waiting...");
    const count = useMotionValue(5);
    const time = useTransform(count, Math.ceil);

    useEffect(() => {
        const animation = animate(count, 0, {
            duration: 5,
            ease: "linear",
        }).then(() => setStatus("Finished!"));

        return animation.stop;
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            className="container"
        >
            <motion.span>{time}</motion.span>
            <motion.span>{status}</motion.span>
        </motion.div>
    );
}

export default App;
