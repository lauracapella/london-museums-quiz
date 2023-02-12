import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function MyComponent({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Hello World!</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MyComponent;