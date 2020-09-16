import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Content from './Content';

interface INotePros {
  note: {
    id: string;
    title: string;
    description: string;
  };
}

const Item: React.FC<INotePros> = ({ children, note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>
        <h3>{children}</h3>
      </motion.div>
      <AnimatePresence>{isOpen && <Content note={note} />}</AnimatePresence>
    </motion.li>
  );
};

export default Item;
