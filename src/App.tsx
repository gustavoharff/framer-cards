import React, { Children } from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import './styles.css';

export default function App() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {notes.map((note) => (
          <Item key={note.id} note={note}>
            {note.title}
          </Item>
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

interface INotePros {
  note: {
    id: string;
    title: string;
    description: string;
  }
}

const Item: React.FC<INotePros> = ({ children, note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div  layout>
        <h3>{children}</h3>
      </motion.div>
      <AnimatePresence>{isOpen && <Content note={note} />}</AnimatePresence>
    </motion.li>
  );
};

const Content: React.FC<INotePros>  = ({ note }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div >{note.description}</div>
    </motion.div>
  );
};

const notes = [
  {
    id: '0',
    title: 'Primeira nota',
    description: 'Descrição da nota 1',
  },
  {
    id: '1',
    title: 'Segunda nota',
    description: 'Descrição da nota 2',
  },
];
