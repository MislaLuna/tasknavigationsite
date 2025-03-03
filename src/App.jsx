import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1>Olá, Mundo!</h1>
    </motion.div>
  );
};

export default App;
