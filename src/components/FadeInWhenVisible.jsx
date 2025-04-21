import 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const FadeInWhenVisible = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
    >
        {children}
    </motion.div>
);

export default FadeInWhenVisible;
