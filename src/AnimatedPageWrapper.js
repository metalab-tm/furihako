import {motion} from "framer-motion";

const AnimatedPageWrapper = ({children}) => {
    const variants = {
        initial: {opacity: 0, y: 30},
        animate: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -30}
    };

    return (
        <motion.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{duration: 0.5}}>
            {children}
        </motion.div>
    );
};

export default AnimatedPageWrapper;