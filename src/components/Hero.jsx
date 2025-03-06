import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-24" style={{
      backgroundImage: 'url("./img/IMG_3351.JPG")',
      backgroundSize: 'cover',
      backgroundPosition: 'center 30%',
      backgroundRepeat: 'no-repeat',
      marginTop: '-64px'
    }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-8 z-10"
      >
        <a href="#about" className="btn-primary text-lg px-10 py-4 rounded-lg">Join Us</a>
        <a href="#events" className="btn-secondary text-lg px-10 py-4 rounded-lg">Explore Events</a>
      </motion.div>
    </section>
  );
};

export default Hero; 