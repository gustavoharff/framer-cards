import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

import Item from '../components/Item';

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

const Home: React.FC = () => {
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
};

export default Home;
