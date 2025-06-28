import { Loader1, Loader2, Loader3, Loader4 } from '@/assets/images';
import { motion } from 'framer-motion';

const images = [Loader1, Loader2, Loader4, Loader3];

const positions = [
  { x: -20, y: -20, rotate: 0 },
  { x: 20, y: -20, rotate: 0 },
  { x: 20, y: 20, rotate: 0 },
  { x: -20, y: 20, rotate: 0 },
];

export default function Loader() {
  return (
    <motion.div
      className="relative mx-auto h-40 w-40"
      animate={{ rotate: [0, 90, 180, 270, 360] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    >
      {images.map((src, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 box-border h-10 w-10 -translate-x-1/2 -translate-y-1/2 p-0.5"
          initial={{ x: positions[i].x, y: positions[i].y }}
          animate={{
            x: [positions[i].x, positions[i].x * 0.25, positions[i].x],
            y: [positions[i].y, positions[i].y * 0.25, positions[i].y],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'mirror',
          }}
        >
          <img src={src} alt={`loader-${i}`} width={40} height={40} />
        </motion.div>
      ))}
    </motion.div>
  );
}
