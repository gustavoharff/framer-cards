import React from 'react';
import { motion } from 'framer-motion';

interface IContentProps {
  note: {
    id: string;
    title: string;
    description: string;
  };
}

const Content: React.FC<IContentProps> = ({ note }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>{note.description}</div>
    </motion.div>
  );
};

export default Content;
